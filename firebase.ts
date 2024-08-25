import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxUu27yGiGG-IzN7R_MEpTdkTEgpwJjWM",
  authDomain: "trader-fce5e.firebaseapp.com",
  projectId: "trader-fce5e",
  storageBucket: "trader-fce5e.appspot.com",
  messagingSenderId: "756612503378",
  appId: "1:756612503378:web:e4160ae9e1678cdc0bcc8b",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
