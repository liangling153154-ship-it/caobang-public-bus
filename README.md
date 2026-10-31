# Cao Bang public bus → Ban Gioc Waterfall

A free, single-page guide for travellers. It answers the three questions nobody
explains: which road the local bus drives along, where to stand, and when the
last bus home leaves.

Open `index.html` directly — no build step, no dependencies to install.

## What is on the page

- Both bus routes drawn on the map as road corridors, with
  direction arrows. You can flag these buses down anywhere along the road.
- A "road near me" finder: it takes your location (or a tap on the map),
  finds the nearest point on the route, and hands off to Google Maps for
  walking directions.
- Streets / Satellite / Terrain basemaps. Satellite helps you recognise the
  actual stretch of roadside before you get there.
- A clock check that tells you whether there is still time to get there and back.
- Full timetable for both routes, both directions.
- Vietnamese phrase cards to show the conductor.
- Photographs of the two confirmed waiting points.
- Offline support: `sw.js` caches map tiles and photos after the first view,
  so the page still opens where there is no signal. Needs https.

## Editing the data

Every time, fare, stop and route line lives in `assets/data/routes.js`.
Change the numbers there and the page follows. Nothing else hard-codes them.

| What | Where |
| --- | --- |
| Departure times | `routes["03"].out` / `.back` |
| Fare shown on the page | `fare.perLegLabel` |
| Towns and their map pins | `routes["03"].towns` |
| "Checked" date in the header | `lastVerifiedLabel` |
| The road lines on the map | `assets/data/roads.js` |

`roads.js` holds the two drawn corridors, precomputed from OSRM road routing,
so they sit on the real tarmac. Leave them alone unless a road is rebuilt.
Route 02 is drawn along ĐT203 as far as Pác Bó; the Sóc Giang bus shares that
road to Hà Quảng and then branches, so the last stretch is not drawn.

After editing `sw.js`, bump its `VERSION` string or returning visitors keep
the old cached copy.

## Before publishing

Replace the placeholder address `you@example.com` in `index.html` and
`assets/data/routes.js` with a real contact.

The geolocation button needs HTTPS. It works on any normal host; opening the
file from disk falls back to tapping the map.

## Credits

Road geometry, the basemap stack and the service worker are borrowed from the
Cao Bang Super Map project (Sen's Homestay).

Photographs of the stops and the operator's route notices were taken on site.
Timetable and fares come from Hoa Binh Transport's printed notices and can
change without notice. Basemaps © Esri, HERE, Garmin, OpenStreetMap contributors; imagery © Esri,
Maxar, Earthstar Geographics; terrain © OpenTopoMap (CC-BY-SA).

Not affiliated with Hoa Binh Transport or the Ban Gioc falls management.
