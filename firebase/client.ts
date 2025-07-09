// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_UEZ0pBI-H72RAPNUnMyTR72ePmoap1U",
  authDomain: "prepwise-3ccc5.firebaseapp.com",
  projectId: "prepwise-3ccc5",
  storageBucket: "prepwise-3ccc5.firebasestorage.app",
  messagingSenderId: "1059737209940",
  appId: "1:1059737209940:web:58448f7b8692507962f1c1",
  measurementId: "G-6VXXJJH12G",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
