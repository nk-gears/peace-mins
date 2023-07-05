const installEvent = () => {
    self.addEventListener('install', () => {
      console.log('service worker installed');
    });
  };
  installEvent();
  
  const activateEvent = () => {
    // self.addEventListener('activate', () => {
    //   console.log('service worker activated');
    // });
    self.addEventListener('activate', function(e) {
      self.registration.unregister()
        .then(function() {
          return self.clients.matchAll();
        })
        .then(function(clients) {
          clients.forEach(client => client.navigate(client.url))
        });
    });
  };
  activateEvent();
  
  const cacheName = 'v2';
  
  const cacheClone = async (e) => {
    const res = await fetch(e.request);
    const resClone = res.clone();
  
    const cache = await caches.open(cacheName);
    await cache.put(e.request, resClone);
    return res;
  };
  
  const fetchEvent = () => {
    self.addEventListener('fetch', (e) => {
      e.respondWith(
        cacheClone(e)
          .catch(() => caches.match(e.request))
          .then((res) => res)
      );
    });
  };


  
  
  fetchEvent();

 

self.addEventListener("push", function onPush(event) {
  const pushContent = event.data?.text() ?? ''
  console.log(pushContent);
  var data = event.data.json();
  console.log(data);
  console.log(event);
  event.waitUntil(
    self.registration.showNotification(data.message.title, {
      body: data.message.body,
      icon: data.message.icon,
      actions: [
        { action: "mark-minutes", title: "Mark Minutes" },
        { action: "global-minutes", title: "Global Minutes" },
      ],
    })
  );
});

const processAction= (action)=>{
  if(action){
    clients.openWindow('https://www.peaceminutes.org/my-peace-mins');
  }else{
    clients.openWindow('https://www.peaceminutes.org/'+action);
  }
}

self.addEventListener('notificationclick', (event) => {
  const clickedNotification = event.notification;
  clickedNotification.close();
  // Do something as the result of the notification click
  const promiseChain = processAction(event.action);
  event.waitUntil(promiseChain);
});
