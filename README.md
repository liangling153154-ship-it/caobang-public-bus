# Cao Bang public bus → Ban Gioc Waterfall

A free, single-page guide for travellers. It answers the three questions nobody
explains: which road the local bus drives along, where to stand, and when the
last bus home leaves.

Open `index.html` directly — no build step, no dependencies to install.

## What is on the page

- The owner's own Google My Maps, embedded live: both bus routes and the
  boarding pins. Edit the map in My Maps and this page follows, with no
  code change. There is also a button to open it in the Google Maps app.
- A "how far am I from a route" check: it takes your location, measures the
  nearest point on the route, and hands off to Google Maps for walking
  directions.
- A clock check that tells you whether there is still time to get there and back.
- Full timetable for both routes, both directions.
- Vietnamese phrase cards to show the conductor.
- Photographs of the two confirmed waiting points.
- Offline support: `sw.js` caches the page, its photos and fonts, so it still
  opens with no signal. Needs https. The embedded Google map cannot be cached
  — travellers should download the area in the Google Maps app.

## Editing the data

Every time, fare, stop and route line lives in `assets/data/routes.js`.
Change the numbers there and the page follows. Nothing else hard-codes them.

| What | Where |
| --- | --- |
| Departure times | `routes["03"].out` / `.back` |
| Fare shown on the page | `fare.perLegLabel` |
| Towns and their map pins | `routes["03"].towns` |
| "Checked" date in the header | `lastVerifiedLabel` |
| Which My Maps is embedded | `mymap.mid` / `.embed` / `.viewer` |
| Route lines used for distances | `assets/data/roads.js` |

`roads.js` is a simplified copy (25 m tolerance) of the two route lines from
the My Maps, used only to measure distances — the visible map is the live
embed. After redrawing a route in My Maps, re-export its KML and regenerate
this file, or the distance check will lag behind the map.

The embedded map must stay shared publicly in My Maps, or visitors see
nothing. Its title shows inside the frame, so give it a real name.

After editing `sw.js`, bump its `VERSION` string or returning visitors keep
the old cached copy.

## Before publishing

Replace the placeholder address `you@example.com` in `index.html` and
`assets/data/routes.js` with a real contact.

The geolocation button needs HTTPS. It works on any normal host; opening the
file from disk falls back to tapping the map.

## Credits

The route lines come from the owner's Google My Maps. The service worker is
borrowed from the Cao Bang Super Map project (Sen's Homestay).

Photographs of the stops and the operator's route notices were taken on site.
Timetable and fares come from Hoa Binh Transport's printed notices and can
change without notice. Map © Google.

Not affiliated with Hoa Binh Transport or the Ban Gioc falls management.
