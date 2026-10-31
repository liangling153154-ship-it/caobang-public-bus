/* =====================================================================
   CAO BANG BUS GUIDE — SERVICE WORKER
   Travellers lose signal in the valleys, so the page is saved on the
   first visit. The map is a Google My Maps iframe and cannot be saved.
   Local html/js: network-first, so edits show up at once online.
   Bump VERSION after changing the photo or the file list.
   Needs https or localhost; silently skipped on file://.
   ===================================================================== */
"use strict";

var VERSION = "cbbus-v3"; // v3: simplified page, saved on install
var FILES = ["./", "index.html", "assets/data/routes.js", "assets/photos/bus-hero.jpg"];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(VERSION).then(function (cache) { return cache.addAll(FILES); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== VERSION) { return caches.delete(k); }
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) { return; }

  e.respondWith(caches.open(VERSION).then(function (cache) {
    return fetch(req).then(function (res) {
      if (res && res.status === 200) { cache.put(req, res.clone()); }
      return res;
    }).catch(function () {
      return cache.match(req, { ignoreSearch: true });
    });
  }));
});
