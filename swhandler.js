if('serviceWorker' in navigator)
{
  console.log('Service worker enabled');
}

async function registerWorker(){
  const registration = await navigator.serviceWorker.register('/cache_sw.js');
  console.log('Service Worker registered');
  return registration;
}

window.addEventListener('load',async ()=>{
  const register = await registerWorker();
});


async function  cached(){
 // const cache=await caches.open('v1');
  try{
    const cache=await caches.open('v1');
 
  const cached = await cache.keys();
  console.log(cached);
  cached.forEach((key)=>{
    console.log(key);
  })
  const cacheresp = await caches.match('/grades.html');
  const resp = await cacheresp.text();
  console.log(resp);
 
  console.log(cache);
  }
  catch(err){
    console.log(err);
  }
}

setTimeout(()=>{
  cached();
},5000);
