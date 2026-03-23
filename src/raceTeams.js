// raceTeams.js — car/team/driver roster for all tracked series
//
// Source of truth for car metadata: number, team, car model, class, and driver lineups.
//
// Primary lookup key: (number, series, season)
//   - number  : car number (integer); for F1 the driver's permanent race number;
//               for WRC the driver's official entry number for the season
//   - series  : must exactly match a series id from raceData.js ('f1', 'imsa', 'wec', 'wrc')
//   - season  : 4-digit year (integer)
//
// Driver overrides (driverOverrides):
//   An optional array of objects for race-specific or mid-season driver changes.
//   Each override has:
//     race     : race name matching raceData.js exactly — applies to that race only
//     drivers  : full driver array to use for that race (replaces base drivers entirely)
//     note     : human-readable explanation (required)
//   For a mid-season change that persists, list all affected race names as separate
//   override objects, or handle the range in the consuming UI using race schedule order.
//
// All driver names match raceResults.js exactly. Car numbers for IMSA are marked
// where they need verification against the official 2026 IMSA entry list.

export const raceTeams = [

  // ── IMSA ─────────────────────────────────────────────────────────────────

  // GTP class
  {
    number: 7,
    series: 'imsa',
    season: 2026,
    team: 'Porsche Penske Motorsport',
    car_model: 'Porsche 963',
    class: 'GTP',
    // Note: raceResults.js uses 'Felipe Nasr' at Daytona and 'Luiz Felipe Nasr' at Sebring
    // for the same driver. 'Luiz Felipe Nasr' is used as the canonical spelling here.
    drivers: ['Luiz Felipe Nasr', 'Julien Andlauer', 'Laurin Heinrich'],
    driverOverrides: [
      {
        race: 'Rolex 24 at Daytona',
        // raceResults.js spells this driver 'Felipe Nasr' at Daytona — preserved as-is
        // to match the results entry for that race
        drivers: ['Felipe Nasr', 'Julien Andlauer', 'Laurin Heinrich'],
        note: 'Daytona results use short form "Felipe Nasr"; lineup otherwise unchanged',
      },
    ],
  },

  {
    number: 6, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'Porsche Penske Motorsport',
    car_model: 'Porsche 963',
    class: 'GTP',
    drivers: ['Laurens Vanthoor', 'Kevin Estre', 'Matthew Campbell'],
  },

  {
    number: 31, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    // Note: raceResults.js lists this car as 'Cadillac Whelen' at Daytona and
    // 'Action Express Racing' at Sebring with overlapping drivers. Treated as one
    // entry; 'Action Express Racing' used as canonical team name.
    team: 'Action Express Racing',
    car_model: 'Cadillac V-Series.R',
    class: 'GTP',
    drivers: ['Jack Aitken', 'Earl Bamber', 'Frederik Vesti'],
    driverOverrides: [
      {
        race: 'Rolex 24 at Daytona',
        drivers: ['Jack Aitken', 'Earl Bamber', 'Frederik Vesti', 'Connor Zilisch'],
        note: 'Connor Zilisch added as 4th driver for Daytona 24h; team listed as "Cadillac Whelen" in results',
      },
    ],
  },

  {
    number: 25, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'BMW M Team WRT',
    car_model: 'BMW M Hybrid V8',
    class: 'GTP',
    // Only appears in Daytona results with 4 drivers; core 2-driver season lineup
    // should be verified — likely Sheldon van der Linde and Dries Vanthoor.
    drivers: ['Sheldon van der Linde', 'Dries Vanthoor', 'Robin Frijns', 'René Rast'],
    driverOverrides: [
      {
        race: 'Rolex 24 at Daytona',
        drivers: ['Sheldon van der Linde', 'Dries Vanthoor', 'Robin Frijns', 'René Rast'],
        note: 'Robin Frijns and René Rast likely added as 3rd/4th drivers for Daytona 24h',
      },
    ],
  },

  // LMP2 class
  {
    number: 10, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'CrowdStrike Racing by APR',
    car_model: 'ORECA 07',
    class: 'LMP2',
    // 4-driver Daytona entry; core season lineup should be verified
    drivers: ['George Kurtz', 'Alex Quinn', 'Toby Sowery', 'Malthe Jakobsen'],
    driverOverrides: [
      {
        race: 'Rolex 24 at Daytona',
        drivers: ['George Kurtz', 'Alex Quinn', 'Toby Sowery', 'Malthe Jakobsen'],
        note: 'Toby Sowery and Malthe Jakobsen likely added for Daytona 24h; verify core lineup',
      },
    ],
  },

  {
    number: 47, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'Inter Europol Competition',
    car_model: 'ORECA 07',
    class: 'LMP2',
    // 4-driver Daytona entry; core season lineup should be verified
    drivers: ['Tom Dillmann', 'Bijoy Garg', 'Antonio Félix da Costa', 'Jeremy Clarke'],
    driverOverrides: [
      {
        race: 'Rolex 24 at Daytona',
        drivers: ['Tom Dillmann', 'Bijoy Garg', 'Antonio Félix da Costa', 'Jeremy Clarke'],
        note: 'Antonio Félix da Costa and Jeremy Clarke likely added for Daytona 24h; verify core lineup',
      },
    ],
  },

  {
    number: 34, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'Inter Europol Competition',
    car_model: 'ORECA 07',
    class: 'LMP2',
    // 4-driver Daytona entry; core season lineup should be verified
    drivers: ['Jakub Smiechowski', 'George Kolovos', 'Nolan Siegel', 'Nick Cassidy'],
    driverOverrides: [
      {
        race: 'Rolex 24 at Daytona',
        drivers: ['Jakub Smiechowski', 'George Kolovos', 'Nolan Siegel', 'Nick Cassidy'],
        note: 'Nolan Siegel and Nick Cassidy likely added for Daytona 24h; verify core lineup',
      },
    ],
  },

  {
    number: 22, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'United Autosports',
    car_model: 'ORECA 07',
    class: 'LMP2',
    drivers: ['Philip Fayer', 'Hunter McElrea', 'Mikkel Jensen'],
  },

  {
    number: 23, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'United Autosports',
    car_model: 'ORECA 07',
    class: 'LMP2',
    drivers: ['Dan Goldburg', 'Paul di Resta', 'Rasmus Lindh'],
  },

  {
    number: 8, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'Tower Motorsports',
    car_model: 'ORECA 07',
    class: 'LMP2',
    drivers: ['John Farano', 'Tristan Vautier', 'Sebastian Alvarez'],
  },

  // GTD Pro class
  {
    number: 1, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'Paul Miller Racing',
    car_model: 'BMW M4 GT3',
    class: 'GTD Pro',
    // 4-driver Daytona entry; core season lineup should be verified
    drivers: ['Neil Verhagen', 'Connor De Phillippi', 'Max Hesse', 'Dan Harper'],
    driverOverrides: [
      {
        race: 'Rolex 24 at Daytona',
        drivers: ['Neil Verhagen', 'Connor De Phillippi', 'Max Hesse', 'Dan Harper'],
        note: 'Max Hesse and Dan Harper likely added for Daytona 24h; verify core lineup',
      },
    ],
  },

  {
    number: 75, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: '75 Express',
    car_model: 'Mercedes-AMG GT3',
    class: 'GTD Pro',
    // 4-driver Daytona entry; core season lineup should be verified
    drivers: ['Kenny Habul', 'Maro Engel', 'Chaz Mostert', 'Will Power'],
    driverOverrides: [
      {
        race: 'Rolex 24 at Daytona',
        drivers: ['Kenny Habul', 'Maro Engel', 'Chaz Mostert', 'Will Power'],
        note: 'Chaz Mostert and Will Power likely added for Daytona 24h; verify core lineup',
      },
    ],
  },

  {
    number: 58, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'Winward Racing',
    car_model: 'Mercedes-AMG GT3',
    class: 'GTD Pro',
    // 4-driver Daytona entry; core season lineup should be verified
    drivers: ['Scott Noble', 'Jason Hart', 'Maxime Martin', 'Luca Stolz'],
    driverOverrides: [
      {
        race: 'Rolex 24 at Daytona',
        drivers: ['Scott Noble', 'Jason Hart', 'Maxime Martin', 'Luca Stolz'],
        note: 'Maxime Martin and Luca Stolz likely added for Daytona 24h; verify core lineup',
      },
    ],
  },

  {
    number: 33, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'Manthey EMA',
    car_model: 'Porsche 911 GT3 R',
    class: 'GTD Pro',
    drivers: ['Thomas Preining', 'Klaus Bachler', 'Ricardo Feller'],
  },

  {
    number: 29, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'AO Racing',
    car_model: 'Ferrari 296 GT3',
    class: 'GTD Pro',
    drivers: ['Nick Tandy', 'Harry King', 'Alessio Picariello'],
  },

  {
    number: 3, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'Pratt Miller Motorsports',
    car_model: 'Corvette Z06 GT3.R',
    class: 'GTD Pro',
    drivers: ['Tommy Milner', 'Nicky Catsburg', 'Nicolas Varrone'],
  },

  // GTD class
  {
    number: 57, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'Winward Racing',
    car_model: 'Mercedes-AMG GT3',
    class: 'GTD',
    // 4-driver Daytona entry; core season lineup should be verified
    drivers: ['Russell Ward', 'Philip Ellis', 'Indy Dontje', 'Lucas Auer'],
    driverOverrides: [
      {
        race: 'Rolex 24 at Daytona',
        drivers: ['Russell Ward', 'Philip Ellis', 'Indy Dontje', 'Lucas Auer'],
        note: 'Indy Dontje and Lucas Auer likely added for Daytona 24h; verify core lineup',
      },
    ],
  },

  {
    number: 44, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'Magnus Racing',
    car_model: 'Porsche 911 GT3 R',
    class: 'GTD',
    // 4-driver Daytona entry; core season lineup should be verified
    drivers: ['John Potter', 'Spencer Pumpelly', 'Nicki Thiim', 'Madison Snow'],
    driverOverrides: [
      {
        race: 'Rolex 24 at Daytona',
        drivers: ['John Potter', 'Spencer Pumpelly', 'Nicki Thiim', 'Madison Snow'],
        note: 'Nicki Thiim and Madison Snow likely added for Daytona 24h; verify core lineup',
      },
    ],
  },

  {
    number: 27, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'Heart of Racing',
    car_model: 'Aston Martin Vantage GT3',
    class: 'GTD',
    drivers: ['Tom Gamble', 'Dudu Barrichello', 'Zacharie Robichon'],
    driverOverrides: [
      {
        race: 'Rolex 24 at Daytona',
        drivers: ['Tom Gamble', 'Dudu Barrichello', 'Zacharie Robichon', 'Mattia Drudi'],
        note: 'Mattia Drudi added as 4th driver for Daytona 24h',
      },
    ],
  },

  {
    number: 21, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'AF Corse',
    car_model: 'Ferrari 296 GT3',
    class: 'GTD',
    drivers: ['Simon Mann', 'Lilou Wadoux', 'Antonio Fuoco'],
  },

  {
    number: 16, // verify against 2026 IMSA entry list
    series: 'imsa',
    season: 2026,
    team: 'Wright Motorsports',
    car_model: 'Porsche 911 GT3 R',
    class: 'GTD',
    drivers: ['Adam Adelson', 'Tom Sargent', 'Callum Ilott'],
  },

  // ── F1 ───────────────────────────────────────────────────────────────────
  // Each F1 entry is a single driver using their permanent race number.
  // car_model uses the 2026 chassis designation — verify once officially announced.

  {
    number: 63,
    series: 'f1',
    season: 2026,
    team: 'Mercedes',
    car_model: 'Mercedes W17', // 2026 chassis designation — verify
    class: 'F1',
    drivers: ['George Russell'],
  },

  {
    number: 12,
    series: 'f1',
    season: 2026,
    team: 'Mercedes',
    car_model: 'Mercedes W17', // 2026 chassis designation — verify
    class: 'F1',
    drivers: ['Kimi Antonelli'],
  },

  {
    number: 16,
    series: 'f1',
    season: 2026,
    team: 'Ferrari',
    car_model: 'Ferrari SF-26', // 2026 chassis designation — verify
    class: 'F1',
    drivers: ['Charles Leclerc'],
  },

  {
    number: 44,
    series: 'f1',
    season: 2026,
    team: 'Ferrari',
    car_model: 'Ferrari SF-26', // 2026 chassis designation — verify
    class: 'F1',
    drivers: ['Lewis Hamilton'],
  },

  // ── WRC ──────────────────────────────────────────────────────────────────
  // drivers is always [driver, codriver].
  // Entry numbers should be verified against the official 2026 WRC entry list.

  {
    number: 12, // verify against 2026 WRC entry list
    series: 'wrc',
    season: 2026,
    team: 'Toyota Gazoo Racing',
    car_model: 'Toyota GR Yaris Rally1',
    class: 'WRC',
    drivers: ['Oliver Solberg', 'Elliott Edmondson'],
  },

  {
    number: 33, // verify against 2026 WRC entry list
    series: 'wrc',
    season: 2026,
    team: 'Toyota Gazoo Racing',
    car_model: 'Toyota GR Yaris Rally1',
    class: 'WRC',
    drivers: ['Elfyn Evans', 'Scott Martin'],
  },

  {
    number: 17, // verify against 2026 WRC entry list
    series: 'wrc',
    season: 2026,
    team: 'Toyota Gazoo Racing',
    car_model: 'Toyota GR Yaris Rally1',
    class: 'WRC',
    drivers: ['Sébastien Ogier', 'Vincent Landais'],
  },

  {
    number: 18, // verify against 2026 WRC entry list
    series: 'wrc',
    season: 2026,
    team: 'Toyota Gazoo Racing',
    car_model: 'Toyota GR Yaris Rally1',
    class: 'WRC',
    drivers: ['Takamoto Katsuta', 'Aaron Johnston'],
  },

  {
    number: 11, // verify against 2026 WRC entry list
    series: 'wrc',
    season: 2026,
    team: 'Hyundai Shell Mobil 1',
    car_model: 'Hyundai i20 N Rally1',
    class: 'WRC',
    drivers: ['Adrien Fourmaux', 'Alexandre Coria'],
  },

  {
    number: 69, // verify against 2026 WRC entry list
    series: 'wrc',
    season: 2026,
    team: 'Toyota Gazoo Racing',
    car_model: 'Toyota GR Yaris Rally1',
    class: 'WRC',
    drivers: ['Sami Pajari', 'Marko Salminen'],
  },

];

// ── Helper ────────────────────────────────────────────────────────────────

/**
 * Look up a single car entry by its primary key (number, series, season).
 *
 * @param {number} number  - Car number (integer)
 * @param {string} series  - Series id ('f1', 'imsa', 'wec', 'wrc')
 * @param {number} season  - Season year (e.g. 2026)
 * @param {string|null} raceName - Optional race name (must match raceData.js exactly).
 *   When provided, driver overrides for that specific race are applied, returning a
 *   shallow copy of the entry with the race-specific drivers array substituted.
 *   If no override exists for the race, the base entry is returned unchanged.
 * @returns {object|null} The matching car entry, or null if not found.
 */
export function getCarByNumber(number, series, season, raceName = null) {
  const entry = raceTeams.find(
    car => car.number === number && car.series === series && car.season === season
  );

  if (!entry) return null;
  if (!raceName || !entry.driverOverrides) return entry;

  const override = entry.driverOverrides.find(o => o.race === raceName);
  if (!override) return entry;

  return { ...entry, drivers: override.drivers };
}
