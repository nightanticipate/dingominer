"use strict";var precacheConfig=[["/index.html","46dc1e1bb2200bdf3a5d0de837a595d2"],["/static/css/main.33762f07.css","8fccf3d3bbb0d3051f465a6284a6bfd3"],["/static/js/main.c79ac880.js","308ca81386f0141d73d099f509016db6"],["/static/media/cat1.2acf1843.png","2acf1843c726cc12b080a76207091fc2"],["/static/media/cat2.6e376466.png","6e3764666525c2b8e6daea01de9bb6c4"],["/static/media/chinese.3dc1931d.png","3dc1931d30cca1ab754ba54ae6b46097"],["/static/media/clouddata.711c4010.png","711c4010eaf26ddf6ce49ac369494ca5"],["/static/media/computer_screen.60606b56.png","60606b5669f195aff04dc0bcfc0ba74f"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/gpu1fan.9b76600f.svg","9b76600f92b5ccea201c600341dafbb8"],["/static/media/gpu2fan.bbf62423.svg","bbf624234913a9dcc9a89ba2174f19a5"],["/static/media/gpu3fan.d7c6752e.svg","d7c6752e72de76fc9b287afd29b8ed56"],["/static/media/grumpycat.d3831aab.png","d3831aabfec3649c8937d8c9169bb7db"],["/static/media/hamster.dd295374.png","dd2953743ca5af5f4e43c15ddafa1895"],["/static/media/motherboard.3b56f53e.svg","3b56f53e36843617ee6a3c0993d36417"],["/static/media/motherboard2.36cd3105.svg","36cd3105c8fb177a04e9230a89605cda"],["/static/media/motherboard3.41399e6c.svg","41399e6c59638a1adbd2b89c38356967"],["/static/media/overclock.a4d5e209.png","a4d5e20909de9460e1853ccc6903f686"],["/static/media/overclock2.2d9035fe.png","2d9035fec3ce70e37cd37960eca57a49"],["/static/media/pc.8598bc39.svg","8598bc399d5bec87bd4624b7f6e56393"],["/static/media/pc2.a1da7568.svg","a1da75687ce6fc1522019421b572f466"],["/static/media/pc3.2e0632bd.svg","2e0632bdabb2677d4db2bd831c5067c9"],["/static/media/penguin.9e08b8da.png","9e08b8da60264021a051a483c6a5293b"],["/static/media/power.30e095ba.png","30e095ba1fa16d990bb1ed1a469cc67d"],["/static/media/powersupply.fa28f7be.svg","fa28f7be063066c5e4cced05390057ea"],["/static/media/powersupply2.9d559093.svg","9d559093b8319e4f0c82e500e26955e6"],["/static/media/powersupply3.be640fb4.svg","be640fb44244c5649184e27212363825"],["/static/media/russian.fcec89ec.png","fcec89ecbec5e152dc8ecdae73e812d0"],["/static/media/spacerocket.b4652d5b.png","b4652d5b26e3bd41b92c21a4bc5bb5e1"],["/static/media/trollcoin.d477ebc3.svg","d477ebc3f156fd7f528421c27f594642"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});