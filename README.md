# Ruha & Abdul Wedding Website

Static multilingual wedding invitation website (Arabic, German, English) with:
- Animated landing envelope intro
- Countdown clock to the wedding date
- Event details and day program
- FAQ/important information accordion
- Highlight section and background music toggle

## Stack

- HTML5 (`index.html`)
- CSS (`css/`, `sass/`)
- JavaScript (vanilla + jQuery in `js/`)
- Static assets in `images/`, `fonts/`

No backend and no build step are required to run the current site.

## Project Structure

- `index.html`: Main page and content sections
- `css/style.css`: Main styling
- `js/i18n.js`: Language translations and switching logic (`ar`, `de`, `en`)
- `js/clock.js`: Countdown target date/time
- `js/landing.js`: Envelope opening animation
- `js/music.js`: Background music behavior
- `images/`: Photos, Open Graph image, music file

## Run Locally

Open `index.html` directly in your browser, or run a simple local server:

```bash
cd /Users/abdulrahmanmohammad/weddingWebsite
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customize

### 1. Wedding date/time

Update both places:
- `index.html` (visible date text in hero and events section)
- `js/clock.js` (countdown target)

Current countdown target is:
- `2026-04-01 17:00` in `js/clock.js`

Note: timezone string is currently `Europ/Berlin` in `js/clock.js`; it should be `Europe/Berlin`.

### 2. Venue and map

Edit in `index.html`:
- Venue text and Google Maps link
- Embedded map `iframe` URL

### 3. Translations

Edit `js/i18n.js` under:
- `en`
- `de`
- `ar`

Keys like `nav.*`, `hero.*`, `events.*`, `program.*`, `info.*`, `music.*` are already wired to elements using `data-i18n`.

### 4. Images and media

- Hero background: `images/Abd-Ruha.jpeg`
- Highlights image: `images/Ruha-Abd.png`
- Social preview image: `images/og.jpg`
- Music file: `images/instagram_DUOa9rTDCrm.mp3`

If you replace files, keep filenames the same or update paths in `index.html`.

## Deploy (GitHub Pages)

1. Push this repository to GitHub.
2. In GitHub repo settings, open **Pages**.
3. Set source to deploy from your main branch root.
4. Save and wait for publish.
5. If using a custom domain, add/update `CNAME` with your domain.

## Notes

- The site is currently RTL by default (`lang="ar"`, `dir="rtl"` in `index.html`), and switches direction automatically when changing language.
- Several CDN libraries are loaded in `index.html` (Google Fonts, FlipClock, Moment.js).
