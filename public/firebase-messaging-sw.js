import firebase from 'firebase/compat/app';
import { FIREBASE_CONFIG } from '../src/config/FirebaseConfig';
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

const firebaseConfig = FIREBASE_CONFIG

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Notificação em segundo plano', payload.notification);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body
    }

    self.registration.showNotification(notificationTitle, notificationOptions);
})