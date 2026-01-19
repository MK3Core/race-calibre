# 🏁 Global Racing Calendar

A clean, modern web app for tracking multiple motorsport racing series calendars in one place. Select your favorite racing series (F1, IMSA, WEC, WRC) and download a personalized .ics calendar file to import into any calendar application.

Built with **Vite + React** for blazing fast development and modern tooling.

## Features

- **Multi-Series Support**: F1, IMSA WeatherTech SportsCar Championship, FIA WEC, and FIA WRC
- **Interactive Selection**: Check/uncheck series to customize your calendar
- **Download Calendar**: Generate and download .ics files compatible with all major calendar apps
- **Clean Design**: Modern, responsive interface that works on desktop and mobile
- **Month-by-Month View**: Races organized by month for easy browsing
- **Color-Coded Series**: Each racing series has its own color for quick identification

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd racing-calendar-vite
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

To preview the production build locally:
```bash
npm run preview
```

## How to Use

1. **Select Racing Series**: Check the boxes for the racing series you want to follow
2. **Browse Schedule**: View all upcoming races organized by month
3. **Download Calendar**: Click the "Download Calendar" button to get your personalized .ics file
4. **Import to Calendar**: Import the downloaded file into:
   - Apple Calendar
   - Google Calendar
   - Outlook
   - Any other calendar app that supports .ics files

## Technology Stack

- **Vite**: Next-generation frontend tooling
- **React 18**: Modern React with hooks
- **date-fns**: Date formatting and manipulation
- **ics**: ICS calendar file generation
- **CSS3**: Modern, responsive styling

## Project Structure

```
racing-calendar-vite/
├── src/
│   ├── App.js              # Main application component
│   ├── App.css             # Application styles
│   ├── raceData.js         # Racing series and schedule data
│   ├── calendarUtils.js    # ICS generation utilities
│   ├── main.jsx            # Application entry point
│   └── index.css           # Base styles
├── index.html
├── vite.config.js
└── package.json
```

## Why Vite?

Vite offers several advantages over traditional bundlers:
- ⚡️ Lightning-fast cold starts
- 🔥 Instant hot module replacement (HMR)
- 📦 Optimized production builds
- 🎯 Modern, actively maintained tooling
- 🚀 No deprecation warnings

## Future Enhancements

- [ ] Webcal:// subscription URLs for auto-updating calendars
- [ ] Additional racing series (MotoGP, IndyCar, Formula E, etc.)
- [ ] Race session details (Practice, Qualifying, Race times)
- [ ] Time zone support
- [ ] Web scraping or API integration for automatic schedule updates
- [ ] User preferences saved to localStorage
- [ ] Dark mode
- [ ] Calendar view (grid layout by month)

## Data Sources

Currently using manually curated 2025 race schedules. Future versions will integrate with:
- Official racing series APIs
- Web scraping from official series websites
- Community-maintained schedule databases

## Deployment

This Vite app can be deployed to:

**Vercel (Recommended):**
```bash
npm i -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

**GitHub Pages:**
```bash
npm install --save-dev gh-pages
# Add to package.json scripts:
# "deploy": "vite build && gh-pages -d dist"
npm run deploy
```

## Contributing

Contributions welcome! Feel free to:
- Add more racing series
- Update race schedules
- Improve the UI/UX
- Add new features

## License

MIT License - feel free to use this project however you'd like!

## Acknowledgments

- Race schedule data compiled from official series websites
- Built with Vite for modern, fast development
- Built for motorsport enthusiasts who want a unified calendar experience
