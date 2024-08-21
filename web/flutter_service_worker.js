'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a71172d9c8d46191e4351b5ecf31237c",
"assets/AssetManifest.bin.json": "e1353673a27d522a2c5074b2af5faf55",
"assets/AssetManifest.json": "540ea7f2637e3579b3ed1db172473933",
"assets/assets/card_type/box.png": "c7bd575ed26d70fefd6eaeb1da5beb12",
"assets/assets/card_type/document.png": "33d7bc27c45c9643d2ac8fcd5f6e6ff4",
"assets/assets/card_type/inward.png": "b57b858dba4553411ea3eadd71a4a700",
"assets/assets/card_type/openbox.png": "068003f24a5e4d7080e46ca72f7ae866",
"assets/assets/icons/bay.png": "4d580f8be9e6dfe7f9649848ef8ac1ec",
"assets/assets/icons/box.png": "68feb61a7df5cc6e80ed91d81dbfacaa",
"assets/assets/icons/calender.png": "18a61f864f0cad7990dabf6c05ee9da9",
"assets/assets/icons/chevron-down.png": "beebb053bf5faadb7c8e9dda44097e16",
"assets/assets/icons/download.png": "47ce9f810b8f54cc4d97fd814a00fc13",
"assets/assets/icons/edit.png": "b9e0608a5502cb7f5f5debd4b0db21f1",
"assets/assets/icons/more.png": "513d7ff0d5e836e1b2fb5d2563228fec",
"assets/assets/icons/plus.png": "15979f53ec5810b5b79da580c9698912",
"assets/assets/icons/printer.png": "0f6835a8ece1c81845c39345cc1b843a",
"assets/assets/icons/qr_code.png": "40c0ef3b082000c4937f204cd4c7bb05",
"assets/assets/icons/retrive.png": "ec9d36b8fd1a6fe530224c1b1bc7090f",
"assets/assets/icons/scan.png": "9aa36dfb7c4da56322df1bbe0e257c70",
"assets/assets/icons/search.png": "02d1c8831fb4fbe4b5022fbb5d49334b",
"assets/assets/icons/trash.png": "cd141cae066fbe580dde34082bcccd72",
"assets/assets/images/boxes.png": "029380c1fca9b264c7e0ebd39487dcb6",
"assets/assets/images/dashboard.png": "e4a8f94b2417f2256d31b9255f7c9409",
"assets/assets/images/documents.png": "3bd4eb2c5386ecf9257d1341b51a9228",
"assets/assets/images/emoji.png": "3d8f797620c0b5824aa70d0df74a01f8",
"assets/assets/images/folder.png": "46ef5ce4e81e7d39f99191eed2611cc0",
"assets/assets/images/help.png": "f73c686686553d3e45f490315d7ec769",
"assets/assets/images/inward.png": "1a152466c7166fcba4d5ce3fa03790b0",
"assets/assets/images/logo.png": "fcf285cc326648acdd0523c52689a160",
"assets/assets/images/navigation.png": "5300c211d7d3a440630d1a2c082308a1",
"assets/assets/images/not_scanned.png": "772fb45c534a08b10388c6b98d196336",
"assets/assets/images/profile.png": "8b1e4af4873caa893d451f31a35bd019",
"assets/assets/images/reports.png": "e02efd71db9fafec13900abda84e1d19",
"assets/assets/images/scanner.png": "9ee9cd89a35339f1251f30c96a1a2177",
"assets/assets/images/sub_video.png": "58231b185eac4e2b65df750867c540ea",
"assets/assets/images/users.png": "7a3ea0aafc4545d02d57ae1fb14ecdf9",
"assets/assets/images/video_overview.png": "849d1675a94620143f676c6c52f6c3d9",
"assets/assets/status_images/bay_storage.png": "68b22ef3bcf66083d762fdae572b46bd",
"assets/assets/status_images/box_put_away.png": "808ab134354939858ad4290d9e5980ad",
"assets/assets/status_images/new_tag.png": "8fe77d39ec25a1fc257884a70465013f",
"assets/assets/status_images/not_scanned.png": "e2bc2222f00013ee952f58fe33faad3c",
"assets/assets/status_images/putAway.png": "c7bd575ed26d70fefd6eaeb1da5beb12",
"assets/assets/status_images/retrived.png": "a6f48a6047d97aad19e6c0020917028f",
"assets/assets/status_images/scanned.png": "7bf8c9985d21359818630f792c517f60",
"assets/assets/status_images/scanning.png": "7251f45ab76b87fa852f14a062db33a3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4d4ec60c62406668529792a2c1465600",
"assets/NOTICES": "80833da921f4c399cc08b36fca04c6a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "70d91f852d8fa3f1f8db90b40d800919",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "5d65eb39a590078b85634c85773f927d",
"icons/Icon-192.png": "14645b18e10d3963663c3d4ae31d7ef7",
"icons/Icon-512.png": "70d91f852d8fa3f1f8db90b40d800919",
"icons/Icon-maskable-192.png": "14645b18e10d3963663c3d4ae31d7ef7",
"icons/Icon-maskable-512.png": "70d91f852d8fa3f1f8db90b40d800919",
"index.html": "852800fcaaa6b0eec8028e039d958eeb",
"/": "852800fcaaa6b0eec8028e039d958eeb",
"main.dart.js": "b62553f8401a6845489d77131201ec51",
"manifest.json": "b61f36b3bddecaecad9116ba9e2dbc53",
"version.json": "f27508563df35735aedf2f2175c13192"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
