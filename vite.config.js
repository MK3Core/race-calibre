import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getRacesBySeries } from './src/raceData.js'
import { generateICS, getFeedPath, getFeedName, getSeriesCombinations } from './src/calendarUtils.js'

// Publishes subscribable .ics feeds (calendars/*.ics) generated from raceData.js
const calendarFeeds = () => {
  const buildFeeds = () => getSeriesCombinations().map(seriesIds => ({
    fileName: getFeedPath(seriesIds),
    source: generateICS(getRacesBySeries(seriesIds), getFeedName(seriesIds)),
  }))

  return {
    name: 'calendar-feeds',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = req.url.split('?')[0]
        const feed = buildFeeds().find(f => `/${f.fileName}` === path)
        if (!feed) return next()
        res.setHeader('Content-Type', 'text/calendar; charset=utf-8')
        res.end(feed.source)
      })
    },
    generateBundle() {
      buildFeeds().forEach(feed => {
        if (!feed.source) this.error(`Failed to generate ${feed.fileName}`)
        this.emitFile({ type: 'asset', fileName: feed.fileName, source: feed.source })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), calendarFeeds()],
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
})
