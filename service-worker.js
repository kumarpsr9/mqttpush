
self.addEventListener('notificationclose', event => {
    const notification = event.notification;
    const primaryKey = notification.data.primaryKey;
  
    console.log('Closed notification: ' + primaryKey);
  });


self.addEventListener('notificationclick', event => {

    console.log(event.notification.data.redirectUrl);
    clients.openWindow(event.notification.data.redirectUrl);
    event.notification.close();
  });