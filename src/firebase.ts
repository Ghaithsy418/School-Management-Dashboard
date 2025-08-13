import { initializeApp } from "firebase/app";
import { getMessaging, Messaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBcE1MGuljhrCigmcEkhKpbQw49xNGW_88",
  authDomain: "smart-path-34ad2.firebaseapp.com",
  projectId: "smart-path-34ad2",
  storageBucket: "smart-path-34ad2.firebasestorage.app",
  messagingSenderId: "551573858064",
  appId: "1:551573858064:web:a5cf9038b5841f42b1e795",
  measurementId: "G-CYFV5N2734",
};

const app = initializeApp(firebaseConfig);
export const messaging: Messaging = getMessaging(app);
