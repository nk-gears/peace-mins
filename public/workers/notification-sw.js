// const processData = () => {
  const mockData = {
    title: "Sample",
    body: "body",
    content: "Simple Content for ever",
    timestamp: "2023-06-25T06:35:00.620Z",
    icon: "/android-chrome-192x192.png",
  };

  self.registration.showNotification(data.message.title, {
    body: data.message.body,
    icon: data.message.icon,
    actions: [
      { action: "Button one", title: "Button one text" },
      { action: "Button two", title: "Button two text" },
    ],
  });
// };

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
        { action: "Button one", title: "Button one text" },
        { action: "Button two", title: "Button two text" },
      ],
    })
  );
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
