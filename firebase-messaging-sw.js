importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

   /*Update with yours config*/
  const firebaseConfig = {
   apiKey: "AIzaSyAlV5vqQ0-UDMS8OzOp9JD9TiAjPA4n0f4",
     authDomain: "insigh-trding.firebaseapp.com",
     databaseURL: "https://insigh-trding-default-rtdb.firebaseio.com",
     projectId: "insigh-trding",
     storageBucket: "insigh-trding.appspot.com",
     messagingSenderId: "1049350208959",
     appId: "1:1049350208959:web:a826b777530855e243350a",
     measurementId: "G-7BH00GNXFC"
 };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });