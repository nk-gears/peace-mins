

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
    clients.openWindow('/my-peace-minutes');
  }else{
    clients.openWindow('/'+action);
  }
}

self.addEventListener('notificationclick', (event) => {
  const clickedNotification = event.notification;
  clickedNotification.close();
  // Do something as the result of the notification click
  const promiseChain = processAction(event.action);
  event.waitUntil(promiseChain);
});

// self.addEventListener('push', (event) => {
//   const pushContent = event.data?.text() ?? ''

//   event.waitUntil(
//     (async () => {
//       console.log(self.clients);
//       const clients = await self.clients.matchAll({
//         includeUncontrolled: true,
//       })

//       // Display notification if we don't get an active client.
//       if (!clients || !clients.length) {
//         self.registration.showNotification('Notifier', {
//           body: pushContent
//         })

//         return
//       }

//       // Send a message to the client.
//       // clients[0].postMessage({
//       //   msg: pushContent,
//       // });
//     })()
//   )
// })
