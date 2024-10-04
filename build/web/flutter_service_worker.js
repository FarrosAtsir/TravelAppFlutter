'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4c56cb8214e456adaa0f2d282b9d2536",
"assets/AssetManifest.bin.json": "415d4308a6797d4864c1f0069edfc424",
"assets/AssetManifest.json": "731246bcc1fc5cd7eb54593f984b7f64",
"assets/assets/images/Alley%2520Palace.png": "8d1792ca0824598bbe98f24b45a1ecd0",
"assets/assets/images/Coeurdes%2520Alpes.png": "afdf2565a572d702b4e6f298491b58df",
"assets/assets/images/rectangle_9921.jpeg": "1792a7b111a661daea05688556b1f109",
"assets/assets/images/rectangle_9922.png": "5a48676e6c0f7fddc5d99b4b5cf07be1",
"assets/assets/images/welcome.jpeg": "fd7ae4d05355d4ceb2d3dfd2c8aa685a",
"assets/assets/vectors/arrow_right_x2.svg": "f366513cd93027828cb469b56bf715b9",
"assets/assets/vectors/container_x2.svg": "4cb5cae6d16cc91da8180f083a65bd25",
"assets/assets/vectors/heart_1_x2.svg": "9da837ce7aedc12ffbbcfde255802f9f",
"assets/assets/vectors/heart_x2.svg": "38be3f301cf483da554d47d80dc81c85",
"assets/assets/vectors/home_x2.svg": "15457c68ec3f8d589160fc58249ba17f",
"assets/assets/vectors/profile_x2.svg": "90a5afc9b499d205f57ddac32eecbf44",
"assets/assets/vectors/search_x2.svg": "261d47c545984af183c13373e6e8949f",
"assets/assets/vectors/shape_2_x2.svg": "14e26cd64f959f3c4661635dd7db49cd",
"assets/assets/vectors/shape_x2.svg": "14e26cd64f959f3c4661635dd7db49cd",
"assets/assets/vectors/star_1_x2.svg": "8dec66f6412ee32059502f2012442a3e",
"assets/assets/vectors/star_x2.svg": "868cb73cc9c7f0f29a54ac2ad515cb24",
"assets/assets/vectors/stroke_11_x2.svg": "a626250f3a9252e5edc997389f1bccbf",
"assets/assets/vectors/stroke_1_x2.svg": "71c3339532a44bea5ecdb22701aa7389",
"assets/assets/vectors/stroke_3_x2.svg": "1da27878da5d8bde22c056c88b27a20e",
"assets/assets/vectors/stroke_6_x2.svg": "dfcba3d35cfa48512a48658ac591fe76",
"assets/assets/vectors/stroke_7_x2.svg": "42e1f4cc982201f2e29ef7286b56645b",
"assets/assets/vectors/swm_icons_duotone_location_1_x2.svg": "c16269aae083b6c7c1482cdc350f2f1e",
"assets/assets/vectors/vector_1_x2.svg": "6f21fce33fd3834d8d258babd660582f",
"assets/assets/vectors/vector_235_x2.svg": "ee8f7a51595db465c23479e305359ced",
"assets/assets/vectors/vector_2_x2.svg": "19466a0179c27671692c1a09ac472850",
"assets/assets/vectors/vector_3_x2.svg": "6aa79eeaafd96bb2343803935516864a",
"assets/assets/vectors/vector_4_x2.svg": "8ac41ebb0e94786a8717e7bedafdb253",
"assets/assets/vectors/vector_x2.svg": "37b27a4c920724f97db051d2da271d6b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6b3ce719c376b6b9a01f467820c552bb",
"assets/NOTICES": "297eb25d4ddfb573734d899acee50ea8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "46a13d05a9cd199a5e739a08d5fcc6d5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "4d4ca45ddb8d7468edfbeca4fc24ed21",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dd2841bca3ca80094a284f429ed403b7",
"/": "dd2841bca3ca80094a284f429ed403b7",
"main.dart.js": "9255773a2a104cb45df67fb835ee566c",
"manifest.json": "8094bf42d982e3c34b46d6b9069166b3",
"version.json": "047b23fa5cd6df647a4067d479c44051"};
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
