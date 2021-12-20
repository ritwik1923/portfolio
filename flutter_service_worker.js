'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8e8fefaca852f1c2afd30cfaab26a282",
".git/config": "2d4291f3416ddf2c2eb4b06d5235018d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7d3001df2296fcf756d1f16a04ac7029",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ffb0d9cd0a05d762f7b74e7dc739ba25",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9df75e7253bf2213776071c7864bb833",
".git/logs/refs/heads/main": "af62f20f34e5df6f8c6e9bd75a984098",
".git/logs/refs/remotes/origin/main": "d911151d859afe467ea9a2c89774e6fa",
".git/objects/03/3fa9182d0b4c8736afb319b476c3458622bbeb": "54732ec6956e40f98bd3d101ac7e860f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/f89eca0ed80812f5be8d448706c4e00e7780bd": "f1f60da9c54567efad8a430b6514e5f3",
".git/objects/0b/67a148aa7665a8b1bb1c2b51ea44ea76d69c17": "db44b3c255d62ac673995c4e6c81eee3",
".git/objects/14/f2fa5d300aa9f8a636d87d6ae3f3a0bc9f1c7f": "56db27f838ee937f4494208519bb49cc",
".git/objects/1d/c2184786a1932e7a76283e99b78a086c318ecb": "22f3e2468815f1b25bf7f16092e1f5ef",
".git/objects/1d/efe42727305af218d4e60258e2f9865620dc20": "057bba53855685f14e3a99b38fc5a96f",
".git/objects/32/2c30f3ad47525b81175f5a3749351a6fe5fe5f": "9a1223ed10baa686c7a32fc8028d0a9f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/8f339a7c4e02c870b9be517bdad79d2a9809ba": "1f0831251840508436c3c5166a741538",
".git/objects/35/2e19a043248c6bb98e443b431d9a9a8cbdb705": "f4498799ee5b2d9d1e3ee732bb8c7ba9",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3a/a19925986d67e5ea0f09705dadc84d350058c1": "83ed4f88deafbdf7f764c28eb266e1c1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/a8a95b822a94e8f174dded33dcf6f680790053": "43160b764446dcb4259a03d68d98079f",
".git/objects/4b/5535d22549e11065f7d52dc5eb74157615922b": "49bfc1b6304988e6a203f6ed12a45022",
".git/objects/4d/a84d9f8e9bd6413b09591097fd80e9b09253d2": "bdb9617e12ec5edd08413c79cc01aeb7",
".git/objects/58/1257ff890de24aedf2247a1aa45c3c51fdd56e": "8fa41b54be0f2b8ade309d74a87fed5c",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/1a059f6f83448d87f229fa03bb5447ebeca4af": "e67793f8c79c44dc212187c73b0480a5",
".git/objects/63/75a8f4a6550e3a1dcba89494d3bf23f0d35f9b": "b739c9866f3e9206bb560d2310ecb614",
".git/objects/66/bc05079dde3bc286b09117b3c04a2db6c3fd77": "2226214854e18c6bd0cb49848131295b",
".git/objects/67/3312322e243db90be82d08720a223fb2c91cac": "1c52c7ffa6894d214d654590fcecbb5c",
".git/objects/70/f9478af50386be9798fed6cf30da55e2b12486": "dcc999b702840a7afcbb1b3a7b1db1ac",
".git/objects/77/b579facf0d7927a9d657854d99de6a4122fb4e": "12f321b3f7418892155097a15825f50f",
".git/objects/78/4ace4aea29cca344e4e37afe77eb12c10b6c29": "65577190588646c26c34e39d1843d852",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/4c0b935f0b8267bd588fc566a694db37f56e1d": "e015b528f076f8952f57e570ed959e14",
".git/objects/84/3bffc6c21f1d3bdb9d76778933063f5cf40a28": "20d9107b7f8a2585f3faadc0536d6c19",
".git/objects/88/75bc433038226b0305262365d1be2688ce4165": "da5db35bf15467d4286a0b57cf74ce3e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/dae4ff870a6d7d4bb0ccf5fc5d1f7e56d0614e": "f185acf8a51e643c402b81e1b7cf5aae",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/eaa960ff5ee807d29d2a96513119a02ee20493": "762af39f09c6151a7a81b08035a18f28",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/93/b9ba3ae19574217ffcf791e2988d07c61d905d": "7131807012a72bea7d6f65ed92da3d95",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/1ada0a981142db4f08e1d414d1493df05e3157": "88e5dd97236747746a7dc580541104d3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/22f0906310ca03c60cf569a161291675bb8f75": "7629566a4d9dc9a58b91fb15bdf3f126",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b4/4788bad68bf53d65cfdfbafeea00cac5cdc0dc": "024e3ed8d8d821769e26e89bfcc934bd",
".git/objects/b5/77714d3aa170f238873138c408aa748490dbd1": "0ca57fa2d2ff4a453c53f12dddd33c2d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/c66b7ec90b509d04e84917c8c64284ad586713": "f94054a0575bd1d01b4019574d34f144",
".git/objects/c1/de75e8f53557e8e4f5e3ea977535185e381faf": "a9b65c4d56cf6728c089f6acf00e54d2",
".git/objects/c2/ba6632c5df38655602b9c85d2e43af6369d9f6": "c13513b566c3dc7240e7694759914ef2",
".git/objects/c8/36cf988316d716762cad146c9c1fa67c45ffd3": "2d32395175fa7110277cf701ffc409df",
".git/objects/c8/636cdb47362bb73c99e289eaf2f511ca545935": "69774d36969ac0529d78c02d2e102e9a",
".git/objects/cd/30316ce028f9717586158680bea4eb21f022d1": "059d7a2ad0bd3edfc8fb86194712f9a6",
".git/objects/d2/3f231dd3ad1e98902a7cd8b428dd2636aad858": "c1b3c105fd9edb78398ed8c628a125e3",
".git/objects/d4/227e0011e6634163885aa53177eae7e183c0b1": "faee92d595ed8d893825b94391be68eb",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/d9/a3517f4c3f2e108e454bcd3b2b4167aa3dc056": "69dfd0b81784919cc11f016041125c8e",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/037f573594de4519311dc630e201756761bf84": "915a31a107f453e52b8d77654390216e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f8/180da9e3dce80e5e53dbab578dab6154c70007": "6fcb020dd58ded8c961f4e8680e179f3",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "1560210f956184f7e790d9c720936947",
".git/refs/heads/main": "1560210f956184f7e790d9c720936947",
".git/refs/remotes/origin/main": "1560210f956184f7e790d9c720936947",
"assets/AssetManifest.json": "c8fc37afbc5b3f99751d32d108db4425",
"assets/assets/fonts/BakbakOne-Regular.ttf": "ab68e44443ab6749fbd45c3830a6a1da",
"assets/assets/fonts/SourceCodePro-VariableFont_wght.ttf": "270ac867bd41054c658e8622d6259580",
"assets/FontManifest.json": "49fd87e27d374a0504deeb9d58113024",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7bddb6d9a81c56574e07f2b952816d2c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9495bde78cc2205645690d3d908e051c",
"/": "9495bde78cc2205645690d3d908e051c",
"main.dart.js": "503af43017389ae487b19366ab8ba662",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
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
