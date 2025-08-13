importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js",
);

const firebaseConfig = {
  apiKey: "AIzaSyBcE1MGuljhrCigmcEkhKpbQw49xNGW_88",
  authDomain: "smart-path-34ad2.firebaseapp.com",
  projectId: "smart-path-34ad2",
  storageBucket: "smart-path-34ad2.firebasestorage.app",
  messagingSenderId: "551573858064",
  appId: "1:551573858064:web:a5cf9038b5841f42b1e795",
  measurementId: "G-CYFV5N2734",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
