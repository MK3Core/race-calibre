// Race results data
// Key format: 'seriesId::race name' (must match name in raceData.js exactly)
//
// Single-class series (F1, WRC): use top-level `podium` array
// Multi-class series (WEC, IMSA): use top-level `classes` array, each with a `podium`
//
// `drivers` is always an array:
//   F1       → 1 driver
//   WRC      → [driver, codriver]
//   WEC/IMSA → 2–4 drivers sharing the car

export const raceResults = {

  // ── IMSA ─────────────────────────────────────────────────────────────────
  'imsa::Rolex 24 at Daytona': {
    classes: [
      {
        className: 'GTP',
        podium: [
          { position: 1, drivers: ['Felipe Nasr', 'Julien Andlauer', 'Laurin Heinrich'], team: 'Porsche Penske Motorsport' },
          { position: 2, drivers: ['Jack Aitken', 'Earl Bamber', 'Frederik Vesti', 'Connor Zilisch'], team: 'Cadillac Whelen' },
          { position: 3, drivers: ['Sheldon van der Linde', 'Dries Vanthoor', 'Robin Frijns', 'René Rast'], team: 'BMW M Team WRT' },
        ],
      },
      {
        className: 'LMP2',
        podium: [
          { position: 1, drivers: ['George Kurtz', 'Alex Quinn', 'Toby Sowery', 'Malthe Jakobsen'], team: 'CrowdStrike Racing by APR' },
          { position: 2, drivers: ['Tom Dillmann', 'Bijoy Garg', 'Antonio Félix da Costa', 'Jeremy Clarke'], team: 'Inter Europol Competition' },
          { position: 3, drivers: ['Jakub Smiechowski', 'George Kolovos', 'Nolan Siegel', 'Nick Cassidy'], team: 'Inter Europol Competition' },
        ],
      },
      {
        className: 'GTD Pro',
        podium: [
          { position: 1, drivers: ['Neil Verhagen', 'Connor De Phillippi', 'Max Hesse', 'Dan Harper'], team: 'Paul Miller Racing (BMW)' },
          { position: 2, drivers: ['Kenny Habul', 'Maro Engel', 'Chaz Mostert', 'Will Power'], team: '75 Express (Mercedes-AMG)' },
          { position: 3, drivers: ['Scott Noble', 'Jason Hart', 'Maxime Martin', 'Luca Stolz'], team: 'Winward Racing (Mercedes-AMG)' },
        ],
      },
      {
        className: 'GTD',
        podium: [
          { position: 1, drivers: ['Russell Ward', 'Philip Ellis', 'Indy Dontje', 'Lucas Auer'], team: 'Winward Racing (Mercedes-AMG)' },
          { position: 2, drivers: ['John Potter', 'Spencer Pumpelly', 'Nicki Thiim', 'Madison Snow'], team: 'Magnus Racing (Aston Martin)' },
          { position: 3, drivers: ['Tom Gamble', 'Dudu Barrichello', 'Zacharie Robichon', 'Mattia Drudi'], team: 'Heart of Racing (Aston Martin)' },
        ],
      },
    ],
  },

  // ── F1 ───────────────────────────────────────────────────────────────────
  'f1::Australian Grand Prix': {
    podium: [
      { position: 1, drivers: ['George Russell'],  team: 'Mercedes' },
      { position: 2, drivers: ['Kimi Antonelli'],  team: 'Mercedes' },
      { position: 3, drivers: ['Charles Leclerc'], team: 'Ferrari' },
    ],
  },

  'f1::Chinese Grand Prix': {
    podium: [
      { position: 1, drivers: ['Kimi Antonelli'],  team: 'Mercedes' },
      { position: 2, drivers: ['George Russell'],  team: 'Mercedes' },
      { position: 3, drivers: ['Lewis Hamilton'],  team: 'Ferrari' },
    ],
  },

  // ── WRC ──────────────────────────────────────────────────────────────────
  'wrc::Rally Monte-Carlo': {
    podium: [
      { position: 1, drivers: ['Oliver Solberg', 'Elliott Edmondson'], team: 'Toyota Gazoo Racing' },
      { position: 2, drivers: ['Elfyn Evans', 'Scott Martin'],         team: 'Toyota Gazoo Racing' },
      { position: 3, drivers: ['Sébastien Ogier', 'Vincent Landais'], team: 'Toyota Gazoo Racing' },
    ],
  },

  'wrc::Safari Rally Kenya': {
    podium: [
      { position: 1, drivers: ['Takamoto Katsuta', 'Aaron Johnston'],  team: 'Toyota Gazoo Racing' },
      { position: 2, drivers: ['Adrien Fourmaux', 'Alexandre Coria'], team: 'Hyundai Shell Mobil 1' },
      { position: 3, drivers: ['Sami Pajari', 'Marko Salminen'],      team: 'Toyota Gazoo Racing' },
    ],
  },

  'wrc::Rally Sweden': {
    podium: [
      { position: 1, drivers: ['Elfyn Evans', 'Scott Martin'],          team: 'Toyota Gazoo Racing' },
      { position: 2, drivers: ['Takamoto Katsuta', 'Aaron Johnston'],   team: 'Toyota Gazoo Racing' },
      { position: 3, drivers: ['Sami Pajari', 'Marko Salminen'],        team: 'Toyota Gazoo Racing' },
    ],
  },

};
