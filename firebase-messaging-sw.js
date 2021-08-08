importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

//Using singleton breaks instantiating messaging()
//App firebase = FirebaseWeb.instance.app;
console.log("serviceWorker sw");

firebase.initializeApp({
    apiKey: "AIzaSyA59hfJBQAbmzb6DjD5wYrdxGpaHIjyCqo",
    authDomain: "newcash-6506d.firebaseapp.com",
    projectId: "newcash-6506d",
    storageBucket: "newcash-6506d.appspot.com",
    messagingSenderId: "1080422313225",
    appId: "1:1080422313225:web:d1269ebf47572fe654f7d8"
});
console.log("serviceWorker sw firebase.initializeApp");

const messaging = firebase.messaging();
console.log("serviceWorker sw messaging");



