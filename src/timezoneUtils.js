import { format, formatInTimeZone } from 'date-fns-tz';

// Get user's browser timezone
export const getUserTimezone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

// Common timezones for the dropdown
export const commonTimezones = [
  { value: 'America/New_York', label: 'Eastern Time (US)' },
  { value: 'America/Chicago', label: 'Central Time (US)' },
  { value: 'America/Denver', label: 'Mountain Time (US)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (US)' },
  { value: 'America/Anchorage', label: 'Alaska Time (US)' },
  { value: 'Pacific/Honolulu', label: 'Hawaii Time (US)' },
  { value: 'Europe/London', label: 'London (GMT/BST)' },
  { value: 'Europe/Paris', label: 'Paris (CET/CEST)' },
  { value: 'Europe/Berlin', label: 'Berlin (CET/CEST)' },
  { value: 'Europe/Rome', label: 'Rome (CET/CEST)' },
  { value: 'Europe/Madrid', label: 'Madrid (CET/CEST)' },
  { value: 'Europe/Moscow', label: 'Moscow (MSK)' },
  { value: 'Asia/Dubai', label: 'Dubai (GST)' },
  { value: 'Asia/Singapore', label: 'Singapore (SGT)' },
  { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
  { value: 'Asia/Hong_Kong', label: 'Hong Kong (HKT)' },
  { value: 'Asia/Shanghai', label: 'Shanghai (CST)' },
  { value: 'Australia/Sydney', label: 'Sydney (AEDT/AEST)' },
  { value: 'Australia/Melbourne', label: 'Melbourne (AEDT/AEST)' },
  { value: 'Pacific/Auckland', label: 'Auckland (NZDT/NZST)' },
  { value: 'America/Sao_Paulo', label: 'São Paulo (BRT)' },
  { value: 'America/Mexico_City', label: 'Mexico City (CST)' },
  { value: 'America/Toronto', label: 'Toronto (EST/EDT)' },
  { value: 'UTC', label: 'UTC (Universal Time)' },
];

// Format race datetime in user's timezone
export const formatRaceDateTime = (race, userTimezone) => {
  const startDate = new Date(race.dateTimeUTC);
  const endDate = race.endDateTimeUTC ? new Date(race.endDateTimeUTC) : null;
  
  // Format the start date/time
  const formattedDate = formatInTimeZone(startDate, userTimezone, 'EEE, MMM d');
  const formattedTime = formatInTimeZone(startDate, userTimezone, 'h:mm a');
  
  // Check if the race spans multiple days
  if (endDate) {
    const startDay = formatInTimeZone(startDate, userTimezone, 'MMM d');
    const endDay = formatInTimeZone(endDate, userTimezone, 'MMM d');
    
    if (startDay !== endDay) {
      // Multi-day event
      return {
        date: `${startDay} - ${endDay}`,
        time: formatInTimeZone(startDate, userTimezone, 'h:mm a'),
        isMultiDay: true
      };
    }
  }
  
  return {
    date: formattedDate,
    time: formattedTime,
    isMultiDay: false
  };
};

// Get timezone abbreviation
export const getTimezoneAbbr = (timezone) => {
  const date = new Date();
  const formatted = formatInTimeZone(date, timezone, 'zzz');
  return formatted;
};
