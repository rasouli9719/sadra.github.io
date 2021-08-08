'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c7ab0b57d95c9208c0d7ecdd3ed90c5a",
"assets/assets/fonts/ar_font.ttf": "0f5573de75f1112d5cb5863eef1951fd",
"assets/assets/fonts/fa_font.ttf": "7053ef9b87586e56bb37ca6c11eae47f",
"assets/assets/images/address_info.png": "e97d0767a277140163dc027d01615b88",
"assets/assets/images/aircraft_ltr.png": "62c734fd0e70ec8e0e9ba6c3f6d7f3a2",
"assets/assets/images/aircraft_rtl.png": "4f0070717fdb4c5a56dee74032b5a592",
"assets/assets/images/airplane_down_ltr.png": "e975b28a971d3f4ddad9ee52d740f5a2",
"assets/assets/images/airplane_down_rtl.png": "5d37aa2f76187fbbed6dd88a118ce930",
"assets/assets/images/airplane_up_ltr.png": "400627f92a9cd2436a6d9576ff5b4d69",
"assets/assets/images/airplane_up_rtl.png": "edc13b3630366faed8a7f33d5a92f28b",
"assets/assets/images/air_class.png": "d1047a75d18f534ef60257e2c40a9582",
"assets/assets/images/air_date.png": "1d4863912b5ef91844544f002115c892",
"assets/assets/images/air_destination.png": "980862c8eb02c0754efb427e354a590b",
"assets/assets/images/air_origin.png": "0b2f59018529ea3f7c1d0736486e8aab",
"assets/assets/images/air_passenger.png": "88d55811bf5e199513289fd47a51326d",
"assets/assets/images/air_two_way.png": "e5d79c6a401bd79cf0dfa533e23d0fa1",
"assets/assets/images/arrow-bar-down.png": "05f6a46a59b03526fc3eb7336dd09ab3",
"assets/assets/images/arrow-bar-to-up.png": "c36b1d216dfc9da3d9ec9f308725e1bc",
"assets/assets/images/background-cart.png": "ac6801a2a9bb67c103a1613822c7520d",
"assets/assets/images/bank_logo.png": "ba6a590751ed1e3157baeccbc6c032c0",
"assets/assets/images/birthdate.png": "35d5795335a73db6fff93e65610d3a0d",
"assets/assets/images/box_filter.png": "30a46866df505f4cdbcecdb482c0a4bd",
"assets/assets/images/box_sort.png": "abf4c8b4aaa4ffe9cba2a0591f504621",
"assets/assets/images/camera.png": "f8db628839e2050b92a76f76a67358b6",
"assets/assets/images/city_hotel.png": "57719864ed440418dd71d5aed02cfae7",
"assets/assets/images/clipboard-list.png": "46db508028691ee8ae5a8e4fe4d85804",
"assets/assets/images/clock.png": "148de8ef5fe4ac0f4d93fd1fe9e05c80",
"assets/assets/images/coin.png": "05025b2de2ec3671c21c1a980b69e06a",
"assets/assets/images/comment.png": "5e3747bae9adb1c2293e7d285a948f32",
"assets/assets/images/credit-card.png": "d92a50bb64252f05cf2a46283b80bf41",
"assets/assets/images/date.png": "004580b6d665bca23aedd0226d492c16",
"assets/assets/images/delete.png": "278fd13c7eeecd61324171d48703574a",
"assets/assets/images/device-mobile.png": "90277a81f5767bbee3bdc3e2f326f735",
"assets/assets/images/discount.png": "97376253af229a0048bd4676db28d5f1",
"assets/assets/images/dislike.png": "6f3890e99b6083e5fd6b0bcf752f232c",
"assets/assets/images/drawer_menu_icon_ltr.png": "f516bb9b07be9af2d43241b7108f1cfc",
"assets/assets/images/drawer_menu_icon_rtl.png": "e22867be4d459d291ee9bc68eaa56fe8",
"assets/assets/images/edit.png": "a07487534869ad03d89e86b2fb740fd5",
"assets/assets/images/email.png": "5347d723e320b4968ed58fbd5663ecec",
"assets/assets/images/empty.png": "dc762ce71137af664762e2840173e190",
"assets/assets/images/empty_list.png": "46d07b04d247f878d5895a8f0db584aa",
"assets/assets/images/female.png": "10b124adcddc2ff8e672b662ac59a9f5",
"assets/assets/images/filter.png": "635f60cdc4fb7afef53ecb4839a3a9c1",
"assets/assets/images/friends.png": "ea75982234743ee6aeabb629061183bb",
"assets/assets/images/googleplay.png": "e732d15fb04b8e6eda912b3df728ba53",
"assets/assets/images/home.png": "0b08244866d9262d6d20110cf044e917",
"assets/assets/images/ic_en.png": "e5b1b60ed92251b26023d8b88199aa1c",
"assets/assets/images/ic_iq.png": "23ded61631f17e82e6d4518cb1e14c18",
"assets/assets/images/ic_ir.png": "a48f05fa365dc6794d5d6eb771735f62",
"assets/assets/images/info.png": "3b4720208813476f612451e2aa79e9b4",
"assets/assets/images/intro_1.png": "351ba5ac59766bfbbe756081d4663d96",
"assets/assets/images/intro_2.png": "c06e88b09d7aef4fa81bbf40c1d463bf",
"assets/assets/images/intro_3.png": "9e4b9ddd59150bc4c6638a83d69ce2f5",
"assets/assets/images/launcher_icon.png": "b8fc920e4c6b33e9fe675d44b133e043",
"assets/assets/images/like.png": "6631107cc48c8119e5808286ec8c8b89",
"assets/assets/images/location_current.png": "bea4ce32559f74c69ff135524f8dc2a7",
"assets/assets/images/location_destination.png": "f2ef4de37e4e5278a4057582746b8087",
"assets/assets/images/location_origin.png": "8928c6a10086d44a9464db0b905e7fa4",
"assets/assets/images/lock-open.png": "adc63c10e2c924a9b1825d55efe7b9fb",
"assets/assets/images/logo.png": "bca299c953be81102fe5880d781fc01f",
"assets/assets/images/male.png": "a0a7efe131d0c194705d37e25427ec08",
"assets/assets/images/my_location.png": "f6f0e7063eb178208030e5aff0acdf9c",
"assets/assets/images/notes.png": "5ce2bae8173511f448a38807c6f41aa5",
"assets/assets/images/paperclip.png": "0f8ecf5307bf1f4b4eaf5a3cfb1270ab",
"assets/assets/images/phone-call.png": "17bd5eeac223e8e20c472d837ddcdf18",
"assets/assets/images/phone.png": "c4d8817f06ee5911abd664a083c4b926",
"assets/assets/images/phonebook.png": "a3d0bebce08d6b6ebf477674780c4370",
"assets/assets/images/refresh.png": "e8fe7bb0fce76ad670119aa9e604921c",
"assets/assets/images/room.png": "a2574ed9c83f170936117b2bce276f27",
"assets/assets/images/search.png": "734422ddc739b4cd05e6849a766200df",
"assets/assets/images/search_c.png": "b800f75793493dce7d91c72ac708c8dc",
"assets/assets/images/seeding.png": "eed72d419da0d333952f992d673484a0",
"assets/assets/images/selected_place.png": "0e792284d85ec08fcc193072825f804a",
"assets/assets/images/share.png": "c328c9c44fa401106138bb4b05b7d696",
"assets/assets/images/share_qr.png": "2e1093cf88a6ac25b25d224325e3e89b",
"assets/assets/images/shopping-cart.png": "8ceef5f38d4c6aca38a5d22b21e32e3b",
"assets/assets/images/sim.png": "714570bd442e1c177d666356ede6dbfd",
"assets/assets/images/sort.png": "b5684a213bbffd35c483ef60a15b27dc",
"assets/assets/images/splash_logo.png": "601e1e218522d6fd1caa9b7917acd998",
"assets/assets/images/support.png": "e49a492d08a45561a652cf550f534581",
"assets/assets/images/time.png": "5e478211915ac315e029581487f9134c",
"assets/assets/images/time_info.png": "7d483f8a3c0a7d1933173dc21972749b",
"assets/assets/images/timing.png": "b74807e34fb6b82dce43aea1fc2b4bc2",
"assets/assets/images/two_way.png": "d5b9566a1fcfbea6fb19f4cf39e8035e",
"assets/assets/images/user-check.png": "88f9550301faf41002a3ae1057e938ed",
"assets/assets/images/visa.png": "af24553a22291e3481d1f8bebf804f5e",
"assets/assets/images/wallet_charge.png": "6c4b4553ab744157500e80c606db1bb6",
"assets/assets/images/whatsapp.png": "340d1f790ae3a70ec2116645eb94c76b",
"assets/FontManifest.json": "1d74c4fc6dc967a62fabb2f9862d3f59",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a974e005e4fe7328f5b1357112ff2ecd",
"favicon.png": "ddad50f49171c788b718e4a5e031cef6",
"firebase-messaging-sw.js": "10e1ca0b09610a69da0ed5d1aaf95f72",
"icons/Icon-192.png": "5012d728ea977c6dc9d247765ca18a91",
"index.html": "446d26439af09a485d4f072f3d2e3584",
"/": "446d26439af09a485d4f072f3d2e3584",
"main.dart.js": "10acf8db049980736336960e8472d0e5",
"manifest.json": "53438958d11abeacae9d179d2fbc6399",
"version.json": "8086113309cc56b38b7dfe027563d157"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
