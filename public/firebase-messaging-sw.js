importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging-compat.js');
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyDtrNgf4wvjkZJycCqojwuoIn7Bmay-MLk",
    authDomain: "firebasics-a07b8.firebaseapp.com",
    projectId: "firebasics-a07b8",
    storageBucket: "firebasics-a07b8.appspot.com",
    messagingSenderId: "1060607636066",
    appId: "1:1060607636066:web:0c5b885e8e676b7a8a973b"
});
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
// firebase-messaging-sw

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically 
// and you should use data messages for custom notifications.
// For more info see: 
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    self.registration.showNotification('Título', { body: 'Hola esto es el body' })
});