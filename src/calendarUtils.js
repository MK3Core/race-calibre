import { createEvents } from 'ics';
import { racingSeries, LAST_UPDATED } from './raceData.js';

const UID_DOMAIN = 'racecalibre.coresnaps.com';

// Bumped whenever the schedule is updated so calendar apps treat changed events as newer
const SEQUENCE = Math.floor(Date.parse(LAST_UPDATED) / 60000);

const slugify = (text) => text
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

// Stable per race (not per date) so a rescheduled race updates the existing event instead of duplicating it
const getRaceUID = (race) =>
  `${race.seriesId}-${race.dateTimeUTC.slice(0, 4)}-${slugify(race.name)}-${slugify(race.location)}@${UID_DOMAIN}`;

// Subscription feed for a set of series, e.g. calendars/f1-wec.ics, or calendars/all.ics for every series
export const getFeedPath = (seriesIds) => {
  const allIds = Object.keys(racingSeries);
  const ids = allIds.filter(id => seriesIds.includes(id));
  return `calendars/${ids.length === allIds.length ? 'all' : ids.join('-')}.ics`;
};

export const getFeedName = (seriesIds) => {
  const allIds = Object.keys(racingSeries);
  const ids = allIds.filter(id => seriesIds.includes(id));
  if (ids.length === allIds.length) return 'Race Calibre - All Series';
  return `Race Calibre - ${ids.map(id => racingSeries[id].name).join(', ')}`;
};

// Every non-empty combination of series, so each sidebar selection has a matching feed
export const getSeriesCombinations = () => {
  const allIds = Object.keys(racingSeries);
  const combinations = [];
  for (let mask = 1; mask < (1 << allIds.length); mask++) {
    combinations.push(allIds.filter((_, i) => mask & (1 << i)));
  }
  return combinations;
};

export const generateICS = (races, calName) => {
  const events = races.map(race => {
    const startDate = new Date(race.dateTimeUTC);
    const endDate = race.endDateTimeUTC ? new Date(race.endDateTimeUTC) : new Date(race.dateTimeUTC);
    
    // If no endDateTimeUTC, assume 3-hour event for single races
    if (!race.endDateTimeUTC) {
      endDate.setHours(endDate.getHours() + 3);
    }

    return {
      uid: getRaceUID(race),
      sequence: SEQUENCE,
      lastModified: Date.parse(LAST_UPDATED),
      title: `${race.cancelled ? 'CANCELLED: ' : ''}${race.name} - ${race.seriesName}`,
      start: [
        startDate.getUTCFullYear(),
        startDate.getUTCMonth() + 1,
        startDate.getUTCDate(),
        startDate.getUTCHours(),
        startDate.getUTCMinutes()
      ],
      end: [
        endDate.getUTCFullYear(),
        endDate.getUTCMonth() + 1,
        endDate.getUTCDate(),
        endDate.getUTCHours(),
        endDate.getUTCMinutes()
      ],
      location: race.location,
      description: `${race.seriesName} - ${race.name}`,
      status: race.cancelled ? 'CANCELLED' : 'CONFIRMED',
      busyStatus: 'FREE',
      categories: [race.seriesName, 'Motorsport', 'Racing'],
      startInputType: 'utc',
      startOutputType: 'utc',
      endInputType: 'utc',
      endOutputType: 'utc',
      alarms: [
        {
          action: 'display',
          trigger: { hours: 24, before: true },
          description: `${race.name} tomorrow`
        }
      ]
    };
  });

  const { error, value } = createEvents(events, calName ? { calName } : {});

  if (error) {
    console.error('Error creating ICS file:', error);
    return null;
  }

  return value;
};

export const downloadICS = (races, filename = 'racing-calendar.ics', calName) => {
  const icsContent = generateICS(races, calName);
  
  if (!icsContent) {
    alert('Error generating calendar file');
    return;
  }

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
};
