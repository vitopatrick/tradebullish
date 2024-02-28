import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL8l1Z7rjozU6InywEbbr9J6RclSMcXvo",
  authDomain: "equity-plus-1601a.firebaseapp.com",
  projectId: "equity-plus-1601a",
  storageBucket: "equity-plus-1601a.appspot.com",
  messagingSenderId: "959632300704",
  appId: "1:959632300704:web:a43795d6866bdafae6c7c5",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
