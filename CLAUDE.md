# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website that provides an interactive travel guide for a religious pilgrimage to Rome during the 2025 Jubilee Year. The application is designed for a group of 9 people and includes detailed day-by-day itineraries, interactive maps using Leaflet, and religious context for each location.

**Purpose:** Personal travel guide for a family trip to Rome, designed to be published on GitHub Pages.

## Project Structure

```
/Users/artur/Projects/SantaJuruca/
├── index.html          # Main HTML structure (76 lines)
├── styles.css          # All styling (537 lines)
├── app.js              # All JavaScript logic (815 lines)
└── CLAUDE.md           # This file
```

## Architecture

### HTML Structure (`index.html`)

The HTML file contains:
- Document head with meta tags, title, and external resource links
- Header with Italian flag gradient and trip title
- Navigation tabs for different sections (Intro, 4 Days, Gastronomy, Info)
- Content container (`<div id="content">`) dynamically populated by JavaScript
- Footer section

**Key element:** `<div id="content"></div>` - All content is dynamically rendered into this container based on the active tab.

### Styling (`styles.css`)

Pure CSS with no preprocessor or framework dependencies:
- Responsive design with mobile breakpoints (`@media (max-width: 640px)`)
- CSS custom properties could be added for theming (colors currently hardcoded)
- Italian flag gradient: `linear-gradient(to right, #15803d, #ffffff, #dc2626)`
- Color scheme: Orange/amber tones (`#f97316`, `#ea580c`) as primary brand colors

**Key classes:**
- `.tab` / `.tab.active` - Navigation tabs
- `.schedule-item` - Daily schedule entries
- `.map-container` - Leaflet map containers (300px height)
- `.religious-box`, `.tip-box`, `.movie-box` - Special information callouts

### JavaScript (`app.js`)

Vanilla JavaScript with no framework dependencies:

**Global State:**
- `activeDay` (number): Currently displayed section (0 = intro, 1-4 = days, 5 = gastronomy, 6 = info)
- `mapInstances` (object): Stores Leaflet map objects for cleanup

**Key Data Structures:**
- `dayRoutes`: Map configuration for each day (center coords, zoom level, location markers)
- Each day's schedule is defined inline within `renderDay()` function

**Key Functions:**
- `initializeMap(day)`: Creates Leaflet map with OpenStreetMap tiles, custom emoji markers, and route polylines
- `renderIntro()`: Returns HTML string for introduction section
- `renderDay(dayNum)`: Returns HTML string for daily itinerary (1-4)
- `renderGastro()`: Returns HTML string for gastronomy guide
- `renderInfo()`: Returns HTML string for general information
- `setActiveDay(day)`: Updates active tab, renders content, initializes maps, scrolls to top

**Event Handling:**
- `DOMContentLoaded`: Initializes tab click listeners and loads intro content
- Tab clicks call `setActiveDay(day)` based on `data-day` attribute

## External Dependencies

The project uses only one external library:

**Leaflet.js** (v1.9.4) - Interactive maps
- CSS: `https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css`
- JS: `https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js`
- Map tiles: OpenStreetMap (`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`)

**Custom map markers:**
- 🏨 Hotel
- ⭐ Attraction
- 🍽️ Restaurant
- 🚇 Transport

## Content Structure

The guide includes:

1. **Introduction** (activeDay = 0): Spiritual context, Holy Doors challenge, usage instructions
2. **Day 1** - Friday, Nov 28: Arrival, hotel check-in, Trevi Fountain
3. **Day 2** - Saturday, Nov 29: Vatican Museums, Sistine Chapel, St. Peter's Basilica
4. **Day 3** - Sunday, Nov 30: Colosseum, Roman Forum, Papal Angelus (optional), Jewish Quarter
5. **Day 4** - Monday, Dec 1: Pantheon, Piazza Navona, departure
6. **Gastronomy Guide** (activeDay = 5): Best gelaterias, tiramisù, the 4 Roman pasta dishes, historic cafés
7. **General Info** (activeDay = 6): Hotel details, transport, tickets, safety, practical tips

## Publishing on GitHub Pages

To publish this site on GitHub Pages:

1. Create a GitHub repository
2. Push these files to the repository:
   - `index.html`
   - `styles.css`
   - `app.js`
   - (optional) `CLAUDE.md`

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / Root
   - Save

4. Access at: `https://[username].github.io/[repository-name]/`

## Development Workflow

Since this is a static site with no build process:

**To preview locally:**
```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: PHP
php -S localhost:8000

# Option 3: Node.js (if you have npx)
npx serve
```

Then open `http://localhost:8000` in your browser.

**To make changes:**
1. Edit `index.html`, `styles.css`, or `app.js` directly
2. Refresh browser to see changes (hard refresh: Cmd+Shift+R / Ctrl+Shift+R)
3. Commit and push to GitHub to update the published site

## Language & Localization

All content is in **Portuguese (European)**.

To translate or create a multilingual version, you would need to:
1. Extract all text content from `app.js` render functions into a separate data file
2. Create translation files (e.g., `content-pt.js`, `content-en.js`)
3. Add language switcher UI
4. Modify render functions to use translated content

## Notes

- No build system required - this is intentional for simplicity
- No package.json or dependencies to manage
- Works offline once loaded (except map tiles)
- Maps require internet connection for OpenStreetMap tiles
- All coordinates are real locations in Rome
