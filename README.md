# Cao Bang public bus → Ban Gioc Waterfall

A free one-page guide for international visitors. It explains how to catch the
local bus from anywhere in Cao Bang: there are no stops to find, so you go to
the road it runs along, stand on the right side and wave.

Open `index.html` directly: no build step, no dependencies.

## Editing

The fare, times, phrases and check date live in `assets/data/routes.js`.
Page text is in `index.html`.

The maps are the owner's Google My Maps, one per route (`maps` in `routes.js`).
Edit them in My Maps and the page follows. They must stay shared publicly.

`sw.js` saves the page for offline use after the first https visit; the map
needs signal. After changing the photo or file list, bump its `VERSION`.

## Credits

Timetable from Hoa Binh Transport's printed notices. Map © Google.
Not affiliated with Hoa Binh Transport or the Ban Gioc falls management.
