# Cao Bang public bus → Ban Gioc Waterfall

A free, single-page guide for travellers. It answers the three questions nobody
explains: which road the local bus drives along, where to stand, and when the
last bus home leaves.

Open `index.html` directly — no build step, no dependencies to install.

## What is on the page

- Both bus routes drawn on an OpenStreetMap map as road corridors, with
  direction arrows. You can flag these buses down anywhere along the road.
- A "road near me" finder: it takes your location (or a tap on the map),
  finds the nearest point on the route, and hands off to Google Maps for
  walking directions.
- A clock check that tells you whether there is still time to get there and back.
- Full timetable for both routes, both directions.
- Vietnamese phrase cards to show the conductor.
- Photographs of the two confirmed waiting points.

## Editing the data

Every time, fare, stop and route line lives in `assets/data/routes.js`.
Change the numbers there and the page follows. Nothing else hard-codes them.

| What | Where |
| --- | --- |
| Departure times | `routes["03"].out` / `.back` |
| Fare shown on the page | `fare.perLegLabel` |
| The road line on the map | `routes["03"].geometry` — `[lat, lng]` pairs |
| Towns listed in the route strip | `routes["03"].towns` |
| "Checked" date in the header | `lastVerifiedLabel` |

The route lines are plotted by hand from landmarks along QL3, ĐT206 and ĐT203,
not recorded from GPS. If a stretch sits off the tarmac, edit those coordinates.

## Before publishing

Replace the placeholder address `you@example.com` in `index.html` and
`assets/data/routes.js` with a real contact.

The geolocation button needs HTTPS. It works on any normal host; opening the
file from disk falls back to tapping the map.

## Credits

Photographs of the stops and the operator's route notices were taken on site.
Timetable and fares come from Hoa Binh Transport's printed notices and can
change without notice. Map tiles © OpenStreetMap contributors.

Not affiliated with Hoa Binh Transport or the Ban Gioc falls management.
