'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a0cc83aaf08422803b7c94dd6651170d",
"index.html": "370af75b01a2d6c728d959c22ad20e53",
"/": "370af75b01a2d6c728d959c22ad20e53",
"firebase-messaging-sw.js": "01bf145332501013b228b3b7da50e492",
"main.dart.js": "45e27d86c12af0fdacf992cd05435b35",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "20b96b6eb7bded436e26fcb21ee412e6",
"assets/AssetManifest.json": "d199b664082a0c6b5d65f23103c5dac7",
"assets/NOTICES": "83a75020c0e76cc3bca867f8972e631a",
"assets/FontManifest.json": "b2cbf94924ee5d44532fff8a94fc3e43",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f9f3b0347d66eb79e48453c734a2e032",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svg/user.svg": "52203fb9efa19b26bd744d369bf6c5de",
"assets/assets/svg/home.svg": "16a24bbddb7ccb0f4bb7d4103166c595",
"assets/assets/svg/change.svg": "e3729f7eead7ef750eaac3cdadcbc9dd",
"assets/assets/svg/go-short.svg": "29eb44f6cfc1875451474e61e4ab6111",
"assets/assets/svg/stocks.svg": "1e154e82d2da688d61528d857c220c0d",
"assets/assets/svg/exchange.svg": "f2ef45838a24ec0593b9355939cd85a2",
"assets/assets/svg/signals.svg": "7272baaa2e1e6c8ae0ee988d54725695",
"assets/assets/svg/support.svg": "4405345db290feedae239d0823c0f25c",
"assets/assets/svg/news.svg": "6a7880aad6c3b691afa0008e0221666e",
"assets/assets/svg/logo-black.svg": "6bb71e71065cb8e213f119168aec33bd",
"assets/assets/svg/close.svg": "abfda85e5dda6be68ea4765e32285c2f",
"assets/assets/svg/padlock.svg": "419aa15854dd92ba598816224ffdd4d8",
"assets/assets/svg/notification.svg": "0ecbf992170996eba9604297c4f3be92",
"assets/assets/svg/star.svg": "58656bc866b7b571275fb45432addea5",
"assets/assets/svg/learn.svg": "a49f129e75f9003bd16637a1666e4585",
"assets/assets/svg/profile.svg": "47be60baa8a7281a95b735338d2d4b18",
"assets/assets/svg/money.svg": "771b96ec75358b22382c50b26f34a93b",
"assets/assets/svg/forex.svg": "88481935fea4ae506a90ab7db654ac76",
"assets/assets/svg/go-long.svg": "ef8353317b3afd8aeed0b57f2c144751",
"assets/assets/svg/logo-white.svg": "b97c94b922d7df7d2c20fcbb49158d38",
"assets/assets/images/icon_logout.png": "ba7eb718879186cb46c5a2af02a4da87",
"assets/assets/images/headphones.png": "414811e3ec5ac83843f047d2f70007d5",
"assets/assets/images/icon_signal_bull.png": "7a41afee9d1569378448a1944812304f",
"assets/assets/images/signup_success.png": "854f459164320b2591c668838ce7208a",
"assets/assets/images/icon_twitter.png": "a6f923d3c909b4fb8bcb7857df6cc0c2",
"assets/assets/images/support.png": "c27acecf0b92a8d73ade7a39f0d6ac4b",
"assets/assets/images/jamaica.png": "0f11196a6e22d03755d66289d9de6109",
"assets/assets/images/hide_subscription.png": "76aca1d7e49f686dac0301a70fad55a5",
"assets/assets/images/icon_signal_bear_arrow.png": "7bc137561b605a2988cee05fea6214df",
"assets/assets/images/icon_signals_unselected.png": "9a247d214addbd1dede8ac76b8c1cdd3",
"assets/assets/images/bg_onboarding_1.png": "6df7dd67d82218692a982b5e6eb49dfd",
"assets/assets/images/logo_with_name.png": "03a31317d3aa1f1723be7d3bb5158b69",
"assets/assets/images/icon_subscription_thumbs_up.png": "dffba4fbadec3e09a7c17a7d031c52e0",
"assets/assets/images/bg_onboarding_2.png": "c4428f59a4f1188e58b9c281ef93b7da",
"assets/assets/images/icon_bear.png": "6d1677cd5b226dc1cf352adb910186d9",
"assets/assets/images/icon_upgrade.png": "25aceb1f1fdfcbab791ea57a2eaed356",
"assets/assets/images/icon_favorite_yellow.png": "8d9a83ded247f5a5dff69b6135878064",
"assets/assets/images/bg_onboarding_3.png": "81f0897ef4a692f346d347dce6f7fe06",
"assets/assets/images/leftText%25203.27.28%2520PM.png": "f358f647de9f4d1a1d5097ac65eda31b",
"assets/assets/images/lock.png": "110cbae53bb13af91d15abfd7292424a",
"assets/assets/images/up.png": "67d54fdc6f0b500e05076e8a42ffc022",
"assets/assets/images/toolbar_background.jpg": "3eb58848f527befc3a3ff33bf21593ec",
"assets/assets/images/empty.png": "fc00ac06b5a5b66014e98a8a74622ed6",
"assets/assets/images/bg_signin.png": "4ff4bfa92e1ed9379b388d751007ae3b",
"assets/assets/images/icon_instagram.png": "c44f74c837f87dc5a59fbd102f2e9d56",
"assets/assets/images/icon_profile_unselected.png": "112a8d5a1130b5c3c48a0abed5e3ea29",
"assets/assets/images/divider.png": "51187dfbfcce1b3fd31a208731723c7e",
"assets/assets/images/icon_phone.png": "35b19fc2922226bf23f6d524a7ef3d30",
"assets/assets/images/icon_signal_bull_arrow.png": "e074bbeaf4ef15429299ac409502c98f",
"assets/assets/images/down.png": "8aa75711f1cfa1fed8059f28494226dd",
"assets/assets/images/icon_bull.png": "c131ff7ed7c92172feb21120fded89cf",
"assets/assets/images/market_quote.jpeg": "64094d8bba440ab0dfc5df233784aec9",
"assets/assets/images/bg_splash_screen.png": "0e6cc0f3951aa07b8032713ae4678f8e",
"assets/assets/images/icon_signal_bear.png": "b2573468e0fa7bea5efef94727ad12bc",
"assets/assets/images/icon_rate.png": "8c79326f01bbb61aa54244efcd0bbf1e",
"assets/assets/images/onboarding_1.png": "69a4930b4fc86f1455a2c6644a1cddbb",
"assets/assets/images/logo_splash.png": "a2875952fec2130b23c5ac4fd47edcb5",
"assets/assets/images/chart.png": "3f9ffd46dd79bb3914587298507ccaa6",
"assets/assets/images/onboarding_3.png": "ad1a3bc3d3a00d5a69d3df917eb8a87d",
"assets/assets/images/feargreedindex.png": "216683cf91ec7553df045e9f1ab6e573",
"assets/assets/images/onboarding_2.png": "180802d55bd5de6464e98f66ae9c6d26",
"assets/assets/images/icon_home_unselected.png": "3c3eb9d59faa60d6f4b83183206b6f66",
"assets/assets/images/background.png": "f293fea060430dd10b7b52ac406e90f2",
"assets/assets/images/logo_splash%25203.27.23%2520PM.png": "a2875952fec2130b23c5ac4fd47edcb5",
"assets/assets/images/heart.png": "4f3b8a56d680406575d2043785c976cb",
"assets/assets/images/icon_announcement_bear.png": "f0e1d45c70888e255c01abe98eba6247",
"assets/assets/images/default_profile.png": "ef94d20f237e87525adeb611a44598e3",
"assets/assets/images/apple.png": "5c4248e7b57dd3460d7b7e78564df5b5",
"assets/assets/images/icon_favorite_grey.png": "263a5f7c247332a97ce291494bdf9166",
"assets/assets/images/logo_with_name%25203.27.23%2520PM%25203.27.23%2520PM.png": "03a31317d3aa1f1723be7d3bb5158b69",
"assets/assets/images/icon_profile_textfield.png": "e42533ee25eae3dee52ce6394c1cc944",
"assets/assets/images/icon_profile_selected.png": "61a94b2e448a22f2c702f6af549fe9ee",
"assets/assets/images/announcement_chart.png": "b6b29297c44548a35b91d2bda5a08d9a",
"assets/assets/images/bg_nav.png": "90eae76a5464d301c6042f329d09ac7d",
"assets/assets/images/gift.png": "76f04e5a244ea5bddb7efedd461d733a",
"assets/assets/images/disclaimer_icon.png": "341461743bb7c4f40fe9daaad246ae3e",
"assets/assets/images/update_rocket.png": "094d56d9b348709f95626246784a0be5",
"assets/assets/images/icon_home_selected.png": "3a58eb686779b1ba29ddd7ea5a5fc4b9",
"assets/assets/images/success.png": "b22cfec1e4051d0410796168038beaed",
"assets/assets/images/app_logo.png": "0984a85182656d637c34e7e3e9d8791e",
"assets/assets/images/icon_subscription_reward.png": "afbb38bd8240fc305c9fb70380147623",
"assets/assets/images/rightText.png": "3104958392531fc9be93502d18f427dd",
"assets/assets/images/icon_signals_selected.png": "f249cabbdcc2e09751f8bae6cad3df53",
"assets/assets/images/ticker-chart.png": "73a407f032337155a60991ab9e39900d",
"assets/assets/images/star.png": "7981fb7cd800ae692496cd2d339c0a0c",
"assets/assets/images/announcement_bull.png": "dabef21e5488206c7fdc664d339f030a",
"assets/assets/images/leftText.png": "f358f647de9f4d1a1d5097ac65eda31b",
"assets/assets/images/google.png": "dba71df3141fadd6dc73d90357138e80",
"assets/assets/images/icon_announcement_bull.png": "6dab58bdc792116854d388f61de2c009",
"assets/assets/images/heatMap.png": "00f50d0131e2c4c968afba119fa4e439",
"assets/assets/images/active_subscription.png": "66e92a0baca6864c05b691a02bbdec28",
"assets/assets/images/icon_notification.png": "e93f188eb827999539738b86415ff537",
"assets/assets/images/bg_signup_success.png": "dee60cbe90aa5eb205b454c612f645fe",
"assets/assets/images/icon_facebook.png": "9162890354b23ad669fa0564dee67d93",
"assets/assets/images/app_logo_black.png": "ad647d61ec283a7e80dca21bc13ee249",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
