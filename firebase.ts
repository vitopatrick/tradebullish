import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB45wwC2IdEDYm5_KOed2GYD6RKROCFJUM",
  authDomain: "nagamarkets-cefdf.firebaseapp.com",
  projectId: "nagamarkets-cefdf",
  storageBucket: "nagamarkets-cefdf.appspot.com",
  messagingSenderId: "55785538154",
  appId: "1:55785538154:web:cb0a430b3b391a03a40013",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
