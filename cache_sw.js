console.log('hello');
let cacheName ='v1';
//Install service worker
let cachedAssets=['grades.html', 'style.css'];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(cachedAssets);
    }).then(()=>{self.skipWaiting()})
  );
});

self.addEventListener('activate',(e)=>{
  console.log('Service Worker activated...');
 e.waitUntil(
    caches.open(cacheName).then((cacheNames)=>{
      return Promise.all(
        cacheNames.map((cache)=>{
          if(cache!==cacheName){
            return caches.delete(cache);
          }
        }
     ));
    })
    );
});


/*self.addEventListener('fetch',(e)=>{
  e.respondWith(myfetch());
    
 async function myfetch(){
    try{
     const resp = await fetch(e.request);
     return await resp.text();
    }
    catch(err){
      const resp = await caches.match(e.request);
      return await resp.text();
    }
  }
});*/

/*self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('v1').then(function(cache) {
      return fetch(event.request).then(function(response) {
        cache.put(event.request, response.clone());
        return response;
      });
    })
  );
});*/
self.addEventListener('fetch',(e)=>{
  e.respondWith(fetch(e.request).catch(()=>{
    caches.match(e.request);
  }));
});
