/* =====================================================================
   CAO BANG BUS GUIDE — SERVICE WORKER
   ---------------------------------------------------------------------
   Borrowed from the Cao Bang Super Map project and trimmed to this page.
   Travellers lose signal in the valleys, so:
     - the map itself is a Google My Maps iframe, which we cannot cache.
       Travellers should open it in the Google Maps app and download the
       area there. Everything else on the page works offline.
     - fonts: cache-first, kept forever.
     - local photos: cache-first; they never change in place.
     - local html/js: network-first with cache fallback, so edits show up
       at once online and the page still opens offline.
   Bump VERSION to invalidate everything after a big change.
   Needs https or localhost; silently skipped on file://.
   ===================================================================== */
"use strict";

var VERSION = "cbbus-v2"; // v2: dropped map tiles, the map is now a Google iframe
var TILE_CACHE = VERSION + "-tiles";
var ASSET_CACHE = VERSION + "-assets";

var CACHE_HOSTS = [
  "fonts.googleapis.com",
  "fonts.gstatic.com"
];

self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k.indexOf(VERSION) !== 0) { return caches.delete(k); }
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

function cacheFirst(req, cacheName) {
  return caches.open(cacheName).then(function (cache) {
    return cache.match(req, { ignoreVary: true }).then(function (hit) {
      if (hit) { return hit; }
      return fetch(req).then(function (res) {
        if (res && (res.status === 200 || res.type === "opaque")) {
          cache.put(req, res.clone());
        }
        return res;
      });
    });
  });
}

function networkFirst(req, cacheName) {
  return caches.open(cacheName).then(function (cache) {
    return fetch(req).then(function (res) {
      if (res && res.status === 200) { cache.put(req, res.clone()); }
      return res;
    }).catch(function () {
      return cache.match(req, { ignoreVary: true }).then(function (hit) {
        if (hit) { return hit; }
        throw new Error("offline and not cached: " + req.url);
      });
    });
  });
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") { return; }

  var url;
  try { url = new URL(req.url); } catch (err) { return; }

  if (CACHE_HOSTS.indexOf(url.hostname) !== -1) {
    e.respondWith(cacheFirst(req, TILE_CACHE));
    return;
  }

  if (url.origin !== self.location.origin) { return; }

  if (/\.(png|jpe?g|webp|avif|svg|mp4)$/i.test(url.pathname)) {
    e.respondWith(cacheFirst(req, ASSET_CACHE));
    return;
  }

  if (/\.(html?|js|css|json)$/i.test(url.pathname) || url.pathname.endsWith("/")) {
    e.respondWith(networkFirst(req, ASSET_CACHE));
  }
});
