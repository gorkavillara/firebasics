// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from "firebase/messaging"
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore();

const sendTokenToServer = async token => {
  // Chequear si ya lo hemos enviado, y si no, lo enviamos
  if (localStorage.getItem('sentToServer') === '1') return;
  try {
    const docRef = await addDoc(collection(db, "tokens"), { token });
    localStorage.setItem('sentToServer', '1');
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const vapidKey = "BIBpYoLUvvcLC41c2xjVFGg7IsdeOOBSo3fIThYt4hMtV2nm-doU5Hofqyye_CuW6NjjWpXB7hJGIBEz658oeXA";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtrNgf4wvjkZJycCqojwuoIn7Bmay-MLk",
  authDomain: "firebasics-a07b8.firebaseapp.com",
  projectId: "firebasics-a07b8",
  storageBucket: "firebasics-a07b8.appspot.com",
  messagingSenderId: "1060607636066",
  appId: "1:1060607636066:web:0c5b885e8e676b7a8a973b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();

// token = "ctVShBcRFzmgif90IFIr1X:APA91bF8ZjXkt2CeyB4wwCWV15f6iB7NC8tOQ-ebJ1ZWXDEDIP_t7-m5e8FNE6rBHo4tv5skSTVgQyQLNnSMlGX1JrcsLI9yhTMZ12Tro9pcmzM9IKrCQvpk1bl46RTVedG7t7-DgT6X"

getToken(messaging, { vapidKey }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // console.log(currentToken);
    sendTokenToServer(currentToken);
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});
