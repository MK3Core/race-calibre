// Race results data
// Key format: 'seriesId::race name' (must match name in raceData.js exactly)
//
// All series use a unified `classes` structure.
// Single-class series (F1, WRC) use a single class entry (className: 'F1' or 'WRC').
// Multi-class series (WEC, IMSA) list each class separately.
//
// Each podium entry contains only:
//   position   : 1 | 2 | 3
//   carNumber  : integer — cross-references raceTeams.js for drivers, team, car model
//
// To add a result: find the car numbers in raceTeams.js and enter them here. Done.

export const raceResults = {

  // ── IMSA ─────────────────────────────────────────────────────────────────
  'imsa::Rolex 24 at Daytona': {
    classes: [
      {
        className: 'GTP',
        podium: [
          { position: 1, carNumber: 7 },
          { position: 2, carNumber: 31 },
          { position: 3, carNumber: 24 },
        ],
      },
      {
        className: 'LMP2',
        podium: [
          { position: 1, carNumber: 904 },
          { position: 2, carNumber: 43 },
          { position: 3, carNumber: 343 },
        ],
      },
      {
        className: 'GTD Pro',
        podium: [
          { position: 1, carNumber: 1 },
          { position: 2, carNumber: 75 },
          { position: 3, carNumber: 48 },
        ],
      },
      {
        className: 'GTD',
        podium: [
          { position: 1, carNumber: 57 },
          { position: 2, carNumber: 44 },
          { position: 3, carNumber: 27 },
        ],
      },
    ],
  },

  'imsa::12 Hours of Sebring': {
    classes: [
      {
        className: 'GTP',
        podium: [
          { position: 1, carNumber: 7 },
          { position: 2, carNumber: 6 },
          { position: 3, carNumber: 31 },
        ],
      },
      {
        className: 'LMP2',
        podium: [
          { position: 1, carNumber: 2 },
          { position: 2, carNumber: 22 },
          { position: 3, carNumber: 8 },
        ],
      },
      {
        className: 'GTD Pro',
        podium: [
          { position: 1, carNumber: 911 },
          { position: 2, carNumber: 77 },
          { position: 3, carNumber: 4 },
        ],
      },
      {
        className: 'GTD',
        podium: [
          { position: 1, carNumber: 21 },
          { position: 2, carNumber: 27 },
          { position: 3, carNumber: 120 },
        ],
      },
    ],
  },

  // ── F1 ───────────────────────────────────────────────────────────────────
  'f1::Australian Grand Prix': {
    classes: [
      {
        className: 'F1',
        podium: [
          { position: 1, carNumber: 63 },
          { position: 2, carNumber: 12 },
          { position: 3, carNumber: 16 },
        ],
      },
    ],
  },

  'f1::Chinese Grand Prix': {
    classes: [
      {
        className: 'F1',
        podium: [
          { position: 1, carNumber: 12 },
          { position: 2, carNumber: 63 },
          { position: 3, carNumber: 44 },
        ],
      },
    ],
  },

  'f1::Japanese Grand Prix': {
    classes: [
      {
        className: 'F1',
        podium: [
          { position: 1, carNumber: 12 },
          { position: 2, carNumber: 81 },
          { position: 3, carNumber: 16 },
        ],
      },
    ],
  },

  // ── WRC ──────────────────────────────────────────────────────────────────
  'wrc::Rally Monte-Carlo': {
    classes: [
      {
        className: 'WRC',
        podium: [
          { position: 1, carNumber: 99 },
          { position: 2, carNumber: 33 },
          { position: 3, carNumber: 1 },
        ],
      },
    ],
  },

  'wrc::Safari Rally Kenya': {
    classes: [
      {
        className: 'WRC',
        podium: [
          { position: 1, carNumber: 18 },
          { position: 2, carNumber: 16 },
          { position: 3, carNumber: 5 },
        ],
      },
    ],
  },

  'wrc::Rally Sweden': {
    classes: [
      {
        className: 'WRC',
        podium: [
          { position: 1, carNumber: 33 },
          { position: 2, carNumber: 18 },
          { position: 3, carNumber: 5 },
        ],
      },
    ],
  },

  'wrc::Rally Croatia': {
    classes: [
      {
        className: 'WRC',
        podium: [
          { position: 1, carNumber: 18 },
          { position: 2, carNumber: 5 },
          { position: 3, carNumber: 20 },
        ],
      },
    ],
  },

};
