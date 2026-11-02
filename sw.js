/* =====================================================================
   CAO BANG BUS GUIDE — SERVICE WORKER
   Travellers lose signal in the valleys, so the page is saved on the
   first visit. The map is a Google My Maps iframe and cannot be saved.
   Local html/js: network-first, so edits show up at once online.
   Bump VERSION after changing the photo or the file list.
   Needs https or localhost; silently skipped on file://.
   ===================================================================== */
"use strict";

var VERSION = "cbbus-v5"; // v4: more bus photos and video
var FILES = ["./", "index.html", "assets/data/routes.js", "assets/photos/bus-hero.jpg", "assets/photos/bus-boarding.jpg", "assets/photos/bus-02.jpg", "assets/photos/ngoc-xuan.jpg", "assets/photos/stop-1.jpg", "assets/photos/stop-2.jpg", "assets/photos/stop-3.jpg", "assets/video/hotel-gate.jpg", "assets/video/bus-sen.jpg"];

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
