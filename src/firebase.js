// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { FIREBASE_CONFIG, VAPID_KEY } from "./config/FirebaseConfig";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = FIREBASE_CONFIG;

// Initialize Firebase
initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestToken = async () => {
    try {
        const currentToken = await getToken(messaging, {
            vapidKey: VAPID_KEY
        });

        if (currentToken) {
            console.log(currentToken)
        } else {
            console.log("Nenhum token recebido")
        }

    } catch (err) {
        console.log(err)
    }
}

export const onMessageListener = () => new Promise (
    (resolve) => {
        onMessage(messaging, () => (payload) => {
            console.log("Notificação em primeiro plano", payload.notification)
            const notificationTitle = payload.notification.title
            const notificationOptions = {
                body: payload.notification.body
            }
            new Notification(notificationTitle, notificationOptions)
            resolve(payload)
        })
    }
)