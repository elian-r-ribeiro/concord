import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSUKodDU1Yz3MkJjkA97aU9PwNXTtGdhE",
  authDomain: "concord-cc034.firebaseapp.com",
  projectId: "concord-cc034",
  storageBucket: "concord-cc034.appspot.com",
  messagingSenderId: "187987741930",
  appId: "1:187987741930:web:e3e27b182b4c2313db1b93"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();