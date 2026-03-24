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
    drivers: ['Luiz Felipe Nasr', 'Julien Andlauer', 'Laurin Heinrich'],
    driverOverrides: [
      {
        race: 'Rolex 24 at Daytona',
        drivers: ['Felipe Nasr', 'Julien Andlauer', 'Laurin Heinrich'],
        note: 'Daytona results use short form "Felipe Nasr"; lineup otherwise unchanged',
      },
    ],
  },

  {
    number: 6,
    series: 'imsa',
    season: 2026,
    team: 'Porsche Penske Motorsport',
    car_model: 'Porsche 963',
    class: 'GTP',
    drivers: ['Laurens Vanthoor', 'Kevin Estre', 'Matthew Campbell'],
  },

  {
    number: 31,
    series: 'imsa',
    season: 2026,
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
    number: 25,
    series: 'imsa',
    season: 2026,
    team: 'BMW M Team WRT',
    car_model: 'BMW M Hybrid V8',
    class: 'GTP',
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
    number: 10,
    series: 'imsa',
    season: 2026,
    team: 'CrowdStrike Racing by APR',
    car_model: 'ORECA 07',
    class: 'LMP2',
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
    number: 47,
    series: 'imsa',
    season: 2026,
    team: 'Inter Europol Competition',
    car_model: 'ORECA 07',
    class: 'LMP2',
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
    number: 34,
    series: 'imsa',
    season: 2026,
    team: 'Inter Europol Competition',
    car_model: 'ORECA 07',
    class: 'LMP2',
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
    number: 22,
    series: 'imsa',
    season: 2026,
    team: 'United Autosports',
    car_model: 'ORECA 07',
    class: 'LMP2',
    drivers: ['Philip Fayer', 'Hunter McElrea', 'Mikkel Jensen'],
  },

  {
    number: 23,
    series: 'imsa',
    season: 2026,
    team: 'United Autosports',
    car_model: 'ORECA 07',
    class: 'LMP2',
    drivers: ['Dan Goldburg', 'Paul di Resta', 'Rasmus Lindh'],
  },

  {
    number: 8,
    series: 'imsa',
    season: 2026,
    team: 'Tower Motorsports',
    car_model: 'ORECA 07',
    class: 'LMP2',
    drivers: ['John Farano', 'Tristan Vautier', 'Sebastian Alvarez'],
  },

  // GTD Pro class
  {
    number: 1,
    series: 'imsa',
    season: 2026,
    team: 'Paul Miller Racing',
    car_model: 'BMW M4 GT3',
    class: 'GTD Pro',
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
    number: 75,
    series: 'imsa',
    season: 2026,
    team: '75 Express',
    car_model: 'Mercedes-AMG GT3',
    class: 'GTD Pro',
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
    number: 58,
    series: 'imsa',
    season: 2026,
    team: 'Winward Racing',
    car_model: 'Mercedes-AMG GT3',
    class: 'GTD Pro',
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
    number: 33,
    series: 'imsa',
    season: 2026,
    team: 'Manthey EMA',
    car_model: 'Porsche 911 GT3 R',
    class: 'GTD Pro',
    drivers: ['Thomas Preining', 'Klaus Bachler', 'Ricardo Feller'],
  },

  {
    number: 29,
    series: 'imsa',
    season: 2026,
    team: 'AO Racing',
    car_model: 'Ferrari 296 GT3',
    class: 'GTD Pro',
    drivers: ['Nick Tandy', 'Harry King', 'Alessio Picariello'],
  },

  {
    number: 3,
    series: 'imsa',
    season: 2026,
    team: 'Pratt Miller Motorsports',
    car_model: 'Corvette Z06 GT3.R',
    class: 'GTD Pro',
    drivers: ['Tommy Milner', 'Nicky Catsburg', 'Nicolas Varrone'],
  },

  // GTD class
  {
    number: 57,
    series: 'imsa',
    season: 2026,
    team: 'Winward Racing',
    car_model: 'Mercedes-AMG GT3',
    class: 'GTD',
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
    number: 44,
    series: 'imsa',
    season: 2026,
    team: 'Magnus Racing',
    car_model: 'Porsche 911 GT3 R',
    class: 'GTD',
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
    number: 27,
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
    number: 21,
    series: 'imsa',
    season: 2026,
    team: 'AF Corse',
    car_model: 'Ferrari 296 GT3',
    class: 'GTD',
    drivers: ['Simon Mann', 'Lilou Wadoux', 'Antonio Fuoco'],
  },

  {
    number: 16,
    series: 'imsa',
    season: 2026,
    team: 'Wright Motorsports',
    car_model: 'Porsche 911 GT3 R',
    class: 'GTD',
    drivers: ['Adam Adelson', 'Tom Sargent', 'Callum Ilott'],
  },

  // ── F1 ───────────────────────────────────────────────────────────────────
  {
    number: 63,
    series: 'f1',
    season: 2026,
    team: 'Mercedes',
    car_model: 'Mercedes W17',
    class: 'F1',
    drivers: ['George Russell'],
  },

  {
    number: 12,
    series: 'f1',
    season: 2026,
    team: 'Mercedes',
    car_model: 'Mercedes W17',
    class: 'F1',
    drivers: ['Kimi Antonelli'],
  },

  {
    number: 16,
    series: 'f1',
    season: 2026,
    team: 'Ferrari',
    car_model: 'Ferrari SF-26',
    class: 'F1',
    drivers: ['Charles Leclerc'],
  },

  {
    number: 44,
    series: 'f1',
    season: 2026,
    team: 'Ferrari',
    car_model: 'Ferrari SF-26',
    class: 'F1',
    drivers: ['Lewis Hamilton'],
  },

  // ── WRC ──────────────────────────────────────────────────────────────────
  {
    number: 12,
    series: 'wrc',
    season: 2026,
    team: 'Toyota Gazoo Racing',
    car_model: 'Toyota GR Yaris Rally1',
    class: 'WRC',
    drivers: ['Oliver Solberg', 'Elliott Edmondson'],
  },

  {
    number: 33,
    series: 'wrc',
    season: 2026,
    team: 'Toyota Gazoo Racing',
    car_model: 'Toyota GR Yaris Rally1',
    class: 'WRC',
    drivers: ['Elfyn Evans', 'Scott Martin'],
  },

  {
    number: 17,
    series: 'wrc',
    season: 2026,
    team: 'Toyota Gazoo Racing',
    car_model: 'Toyota GR Yaris Rally1',
    class: 'WRC',
    drivers: ['Sébastien Ogier', 'Vincent Landais'],
  },

  {
    number: 18,
    series: 'wrc',
    season: 2026,
    team: 'Toyota Gazoo Racing',
    car_model: 'Toyota GR Yaris Rally1',
    class: 'WRC',
    drivers: ['Takamoto Katsuta', 'Aaron Johnston'],
  },

  {
    number: 11,
    series: 'wrc',
    season: 2026,
    team: 'Hyundai Shell Mobil 1',
    car_model: 'Hyundai i20 N Rally1',
    class: 'WRC',
    drivers: ['Adrien Fourmaux', 'Alexandre Coria'],
  },

  {
    number: 69,
    series: 'wrc',
    season: 2026,
    team: 'Toyota Gazoo Racing',
    car_model: 'Toyota GR Yaris Rally1',
    class: 'WRC',
    drivers: ['Sami Pajari', 'Marko Salminen'],
  },

];

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
