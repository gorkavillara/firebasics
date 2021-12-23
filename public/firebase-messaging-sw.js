importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDtrNgf4wvjkZJycCqojwuoIn7Bmay-MLk",
    authDomain: "firebasics-a07b8.firebaseapp.com",
    projectId: "firebasics-a07b8",
    storageBucket: "firebasics-a07b8.appspot.com",
    messagingSenderId: "1060607636066",
    appId: "1:1060607636066:web:0c5b885e8e676b7a8a973b"
});

const messaging = firebase.messaging();