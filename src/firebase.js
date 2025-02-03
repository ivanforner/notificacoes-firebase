// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiU28uRk_a6P3sWSFposy0-Fl-lRpjaUU",
  authDomain: "jornada-milhas-5ddee.firebaseapp.com",
  projectId: "jornada-milhas-5ddee",
  storageBucket: "jornada-milhas-5ddee.firebasestorage.app",
  messagingSenderId: "691971876377",
  appId: "1:691971876377:web:540a92d1ce1fa96225ec88"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestToken = async () => {
    try {
        const currentToken = await getToken(messaging, {
            vapidKey: "BJaKSxRD22UqNwilbs40HrEqckgmbzj3_S-ICTJmgp81TrKGeaCypuVB4Q-nsADYCdJGqmSqDwUeVQD6iO6oN8w"
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
            console.log(payload)
            resolve(payload)
        })
    }
)