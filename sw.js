const CACHE="balkan-drive-radio-v2";
const APP=["./","./index.html","./manifest.webmanifest","./icon-180.png","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.destination==="audio"||["sehara.name.ba","live.coolradio.rs","stream.radios.rs","stream.zeno.fm","sslstream.okradio.net"].includes(u.hostname))return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html"))))});