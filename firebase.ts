import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqLAVQ1LPnx02yi6e_UsJL4aj7L4-g1f4",
  authDomain: "brokerbase-8f9a5.firebaseapp.com",
  projectId: "brokerbase-8f9a5",
  storageBucket: "brokerbase-8f9a5.appspot.com",
  messagingSenderId: "804354409302",
  appId: "1:804354409302:web:89cdd8f2eb75c6fc758cf7",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
