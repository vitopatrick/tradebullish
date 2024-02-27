import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb7dul7HEAOXS837zn0J1m33QtSf8lWm8",
  authDomain: "btc-project-18ff9.firebaseapp.com",
  projectId: "btc-project-18ff9",
  storageBucket: "btc-project-18ff9.appspot.com",
  messagingSenderId: "1006061982685",
  appId: "1:1006061982685:web:ef284a535e11926c211c34",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
