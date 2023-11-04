import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa6MEAelYuYqwgqjjmbbVj7Wzz709ThQA",
  authDomain: "brokerbase-c03dd.firebaseapp.com",
  projectId: "brokerbase-c03dd",
  storageBucket: "brokerbase-c03dd.appspot.com",
  messagingSenderId: "494274016587",
  appId: "1:494274016587:web:dd21ceae3288ead55724ce",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
