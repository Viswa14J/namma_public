// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvQNrhYMHQH8q0W5X_S4SEyW5Wfd1bwaQ",
  authDomain: "nammaveedu-official.firebaseapp.com",
  projectId: "nammaveedu-official",
  storageBucket: "nammaveedu-official.appspot.com",
  messagingSenderId: "216086408380",
  appId: "1:216086408380:web:a9f10ea241ac72cf7af4b9",
  measurementId: "G-D3BZH4ZG01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app); 