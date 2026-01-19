import { createEvents } from 'ics';

export const generateICS = (races) => {
  const events = races.map(race => {
    const startDate = new Date(race.dateTimeUTC);
    const endDate = race.endDateTimeUTC ? new Date(race.endDateTimeUTC) : new Date(race.dateTimeUTC);
    
    // If no endDateTimeUTC, assume 3-hour event for single races
    if (!race.endDateTimeUTC) {
      endDate.setHours(endDate.getHours() + 3);
    }

    return {
      title: `${race.name} - ${race.seriesName}`,
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
      status: 'CONFIRMED',
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

  const { error, value } = createEvents(events);

  if (error) {
    console.error('Error creating ICS file:', error);
    return null;
  }

  return value;
};

export const downloadICS = (races, filename = 'racing-calendar.ics') => {
  const icsContent = generateICS(races);
  
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
