import React, { useState, useMemo, useEffect } from 'react';
import { racingSeries, getRacesBySeries, LAST_UPDATED } from './raceData';
import { raceResults } from './raceResults';
import { downloadICS } from './calendarUtils';
import { getUserTimezone, commonTimezones, formatRaceDateTime, getTimezoneAbbr } from './timezoneUtils';
import './App.css';

function App() {
  const [selectedSeries, setSelectedSeries] = useState(['f1', 'imsa', 'wec', 'wrc']);
  const [userTimezone, setUserTimezone] = useState(getUserTimezone());
  const [collapsedMonths, setCollapsedMonths] = useState(new Set());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [resultModal, setResultModal] = useState(null); // { race, result }
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update Every Minute

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const filteredRaces = useMemo(() => {
    return getRacesBySeries(selectedSeries);
  }, [selectedSeries]);

  useEffect(() => {
    const grouped = groupRacesByMonth();
    const pastMonths = new Set();
    Object.entries(grouped).forEach(([monthYear, races]) => {
      if (isMonthPast(races)) {
        pastMonths.add(monthYear);
      }
    });
    setCollapsedMonths(pastMonths);
  }, [filteredRaces, userTimezone]);

  const isRacePast = (race) => {
    const now = currentTime.getTime();
    const endTime = race.endDateTimeUTC
      ? new Date(race.endDateTimeUTC).getTime()
      : new Date(race.dateTimeUTC).getTime() + 3 * 60 * 60 * 1000;
    return now > endTime;
  };

  const getRaceStatus = (race) => {
    const now = currentTime.getTime();
    const startTime = new Date(race.dateTimeUTC).getTime();
    const endTime = race.endDateTimeUTC
      ? new Date(race.endDateTimeUTC).getTime()
      : startTime + (3 * 60 * 60 * 1000);

    // Show the "UPCOMING" badge for races starting within the next week.
    const UPCOMING_WINDOW_MS = 6 * 24 * 60 * 60 * 1000;
    const upcomingBefore = startTime - UPCOMING_WINDOW_MS;

    if (now >= startTime && now <= endTime) {
      return 'live';
    } else if (now >= upcomingBefore && now < startTime) {
      return 'upcoming';
    }
    return null;
  };

  const toggleSeries = (seriesId) => {
    setSelectedSeries(prev => {
      if (prev.includes(seriesId)) {
        return prev.filter(id => id !== seriesId);
      } else {
        return [...prev, seriesId];
      }
    });
  };
  const toggleAllSeries = () => {
    if (selectedSeries.length === Object.keys(racingSeries).length) {
      setSelectedSeries([]);
    } else {
      setSelectedSeries(Object.keys(racingSeries));
    }
  };

  const handleDownload = () => {
    if (filteredRaces.length === 0) {
      alert('Please select at least one racing series');
      return;
    }
    
    const seriesNames = selectedSeries
      .map(id => racingSeries[id].name.split(' ')[0])
      .join('-')
      .toLowerCase();
    
    downloadICS(filteredRaces, `racing-calendar-${seriesNames}.ics`);
  };

  const toggleMonth = (monthYear) => {
    setCollapsedMonths(prev => {
      const next = new Set(prev);
      if (next.has(monthYear)) {
        next.delete(monthYear);
      } else {
        next.add(monthYear);
      }
      return next;
    });
  };

  const isMonthPast = (races) => {
    const now = new Date();
    return races.every(race => {
      const endTime = race.endDateTimeUTC
        ? new Date(race.endDateTimeUTC)
        : new Date(new Date(race.dateTimeUTC).getTime() + 3 * 60 * 60 * 1000); // +3 hours fallback
      return endTime < now;
    });
  };

  const groupRacesByMonth = () => {
    const grouped = {};
    filteredRaces.forEach(race => {
      const raceDate = new Date(race.dateTimeUTC);
      const monthYear = raceDate.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric',
        timeZone: userTimezone 
      });
      if (!grouped[monthYear]) {
        grouped[monthYear] = [];
      }
      grouped[monthYear].push(race);
    });
    return grouped;
  };

  const racesByMonth = groupRacesByMonth();

  const formatLastUpdated = () => {
    const date = new Date(LAST_UPDATED);
    const dateString = date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      timeZone: userTimezone
    });
    const timeString = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZone: userTimezone
    });
    return `${dateString} at ${timeString}`;
  };

  return (
    <div className="App">
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <span className="theme-toggle-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
        <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
      </button>

      <header className="header">
        <h1>🏁 Race Calibre</h1>
        <p className="subtitle">Major racing schedules, converted to your timezone, downloadable for your calendar.</p>
      </header>

      <div className="container">
        <aside className="sidebar">
          <div className="series-selector">
            <h2>Racing Series</h2>
            <div className="series-list">
              {/* "All" checkbox */}
              <label className="series-checkbox series-checkbox-all"
                style={{ '--series-color': '#64748b' }}
              >
                <input
                  type="checkbox"
                  checked={selectedSeries.length === Object.keys(racingSeries).length}
                  onChange={() => toggleAllSeries()}
                />
                <span className="checkbox-custom"></span>
                <span className="series-name">All Series</span>
              </label>
              {Object.values(racingSeries).map(series => (
                <label 
                  key={series.id} 
                  className="series-checkbox"
                  style={{ '--series-color': series.color }}
                >
                  <input
                    type="checkbox"
                    checked={selectedSeries.includes(series.id)}
                    onChange={() => toggleSeries(series.id)}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="series-name">{series.name}</span>
                </label>
              ))}
            </div>

            <div className="timezone-selector">
              <label htmlFor="timezone-select" className="timezone-label">
                🌍 Timezone
              </label>
              <select 
                id="timezone-select"
                value={userTimezone} 
                onChange={(e) => setUserTimezone(e.target.value)}
                className="timezone-dropdown"
              >
                {commonTimezones.map(tz => (
                  <option key={tz.value} value={tz.value}>
                    {tz.label}
                  </option>
                ))}
              </select>
              <small className="timezone-info">
                Showing times in {getTimezoneAbbr(userTimezone)}
              </small>
            </div>
            
            <button 
              className="download-button" 
              onClick={handleDownload}
              disabled={selectedSeries.length === 0}
            >
              📅 Download Calendar
            </button>
            
            <div className="download-info">
              <small>
                {selectedSeries.length === 0 
                  ? 'Select at least one series' 
                  : `${filteredRaces.length} race${filteredRaces.length !== 1 ? 's' : ''} selected`}
              </small>
            </div>
          </div>
        </aside>

        <main className="main-content">
          {filteredRaces.length === 0 ? (
            <div className="empty-state">
              <p>👈 Select racing series to view the schedule</p>
            </div>
          ) : (
            <>
            <div className="races-container">
  {Object.entries(racesByMonth).map(([monthYear, races]) => {
    const isCollapsed = collapsedMonths.has(monthYear);
    const isPast = isMonthPast(races);
    return (
      <div key={monthYear} className={`month-section ${isPast ? 'month-past' : ''}`}>
        <h3
          className={`month-header ${isPast ? 'month-header-past' : ''}`}
          onClick={() => toggleMonth(monthYear)}
        >
          <span>{monthYear}</span>
          <span className="month-toggle-icon">{isCollapsed ? '▸' : '▾'}</span>
        </h3>
        {!isCollapsed && (
          <div className="races-grid">
            {races.map((race, index) => {
              const { date, time, isMultiDay } = formatRaceDateTime(race, userTimezone);
              const raceStatus = getRaceStatus(race);
              const racePast = isRacePast(race);
              return (
                <div
                  key={`${race.seriesId}-${index}`}
                  className={`race-card${racePast ? ' race-card-past' : ''}`}
                  style={{ '--series-color': race.seriesColor }}
                >
                  <div className="race-card-header">
                    <div
                      className="race-series-badge"
                      style={{ backgroundColor: race.seriesColor }}
                    >
                      {race.seriesId.toUpperCase()}
                    </div>
                    {racePast && <span className="race-finished-flag">🏁</span>}
                    {raceStatus === 'live' && (
                      <div className="live-badge">
                        <div className="live-dot"></div>
                        LIVE
                      </div>
                    )}
                    {raceStatus === 'upcoming' && (
                      <div className="upcoming-badge">UPCOMING</div>
                    )}
                  </div>
                  <div className="race-details">
                    <div className="race-date">{date}</div>
                    {racePast ? (() => {
                      const result = raceResults[`${race.seriesId}::${race.name}`];
                      return result ? (
                        <button
                          className="results-button"
                          onClick={() => setResultModal({ race, result })}
                        >
                          Results
                        </button>
                      ) : null;
                    })() : (
                      <div className="race-time">🕐 {time}</div>
                    )}
                    <div className="race-name">{race.name}</div>
                    <div className="race-location">📍 {race.location}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  })}
</div>

            </>
          )}
        </main>
      </div>

      {resultModal && (
        <div className="modal-overlay" onClick={() => setResultModal(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setResultModal(null)}>×</button>
            <div className="modal-header">
              <div className="race-series-badge" style={{ backgroundColor: resultModal.race.seriesColor }}>
                {resultModal.race.seriesId.toUpperCase()}
              </div>
              <h2 className="modal-title">{resultModal.race.name}</h2>
              <p className="modal-location">📍 {resultModal.race.location}</p>
            </div>
            <div className="modal-body">
              {resultModal.result.classes ? (
                resultModal.result.classes.map(cls => (
                  <div key={cls.className} className="result-class">
                    <h3 className="result-class-name">{cls.className}</h3>
                    <div className="podium">
                      {cls.podium.map(entry => (
                        <div key={entry.position} className={`podium-entry podium-${entry.position}`}>
                          <span className="podium-position">{entry.position === 1 ? '🥇' : entry.position === 2 ? '🥈' : '🥉'}</span>
                          <div className="podium-details">
                            <span className="podium-drivers">{entry.drivers.join(' — ')}</span>
                            <span className="podium-team">{entry.team}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="podium">
                  {resultModal.result.podium.map(entry => (
                    <div key={entry.position} className={`podium-entry podium-${entry.position}`}>
                      <span className="podium-position">{entry.position === 1 ? '🥇' : entry.position === 2 ? '🥈' : '🥉'}</span>
                      <div className="podium-details">
                        <span className="podium-drivers">{entry.drivers.join(' — ')}</span>
                        <span className="podium-team">{entry.team}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>Download your personalized racing calendar • All times shown in your selected timezone</p>
        <p className="last-updated">Last updated: {formatLastUpdated()}</p>
      </footer>
    </div>
  );
}

export default App;
