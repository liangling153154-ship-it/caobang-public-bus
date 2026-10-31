const fs = require('fs');
let s = fs.readFileSync('index.html', 'utf8');
function rep(find, into, label) {
  if (s.indexOf(find) === -1) { console.log('MISS: ' + label); process.exitCode = 1; return; }
  s = s.replace(find, into); console.log('ok: ' + label);
}

/* 1. draw the indicative in-city section */
rep("    ).addTo(g).bindPopup(\n" +
    "      '<b>Route ' + code + '</b><br>' + r.roadNote + '<br><br>Wave anywhere along this road.'\n" +
    "    );",
    "    ).addTo(g).bindPopup(\n" +
    "      '<b>Route ' + code + '</b><br>' + r.roadNote + '<br><br>Wave anywhere along this road.'\n" +
    "    );\n\n" +
    "    var cityLink = (window.BG_ROADS && window.BG_ROADS[code] && window.BG_ROADS[code].cityLink) || null;\n" +
    "    if (cityLink) {\n" +
    "      L.polyline(cityLink, {\n" +
    "        color: r.colour, weight: 4, opacity: 0.8, dashArray: '8 8', lineCap: 'round'\n" +
    "      }).addTo(g).bindPopup('<b>In-city section</b><br>The bus starts at the provincial ' +\n" +
    "        'hospital, crosses town and picks up again at Ng&#7885;c Xu&#226;n. Street path indicative.');\n" +
    "    }",
    'city link polyline');

/* 2. include it when fitting the map */
rep("      pts = pts.concat(APP.lineFor(c));",
    "      pts = pts.concat(APP.lineFor(c));\n" +
    "      var cl = window.BG_ROADS && window.BG_ROADS[c] && window.BG_ROADS[c].cityLink;\n" +
    "      if (cl) { pts = pts.concat(cl); }",
    'city link in bounds');

/* 3. legend entry */
rep('          <span><span class="lg-dot" style="background:#9A4C06" aria-hidden="true"></span>Known stop</span>',
    '          <span><span class="lg-dot" style="background:#9A4C06" aria-hidden="true"></span>Boarding point</span>\n' +
    '          <span><span class="lg-band" style="background:repeating-linear-gradient(90deg,#0B6E5F 0 5px,transparent 5px 9px)" aria-hidden="true"></span>City section</span>',
    'legend');

/* 4. map note */
rep('          on to S&#243;c Giang past the end of the line shown. Tiles are cached after the\n' +
    '          first view, so the map still opens with no signal.',
    '          on to S&#243;c Giang past the end of the line shown. The dashed loop through town\n' +
    '          is drawn between the real boarding pins, but its exact streets are not mapped.\n' +
    '          Tiles are cached after the first view, so the map still opens with no signal.',
    'map note');

/* 5. the routes callout was wrong now */
rep('        <b>Both start at the same roundabout.</b>\n' +
    '        <p>&#272;&#432;&#7901;ng Tr&#242;n Ng&#7885;c Xu&#226;n, by the bus station. Route 03 one side, route 02 the other.</p>',
    '        <b>The falls bus starts at the hospital.</b>\n' +
    '        <p>It crosses town and picks up again at &#272;&#432;&#7901;ng Tr&#242;n Ng&#7885;c Xu&#226;n, where route 02 also passes. Board at the hospital and you get a seat.</p>',
    'routes callout');

fs.writeFileSync('index.html', s);
