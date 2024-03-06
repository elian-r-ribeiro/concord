import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBll3J7U7v6gFRbF-r0UetiW6oYBQ36i00",
  authDomain: "concord-df778.firebaseapp.com",
  projectId: "concord-df778",
  storageBucket: "concord-df778.appspot.com",
  messagingSenderId: "335132904393",
  appId: "1:335132904393:web:92604228f3440e95357618"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();