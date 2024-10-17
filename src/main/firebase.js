// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "yyy",
  projectId: "xxx",
  storageBucket: "yyy",
  messagingSenderId: "xxx",
  appId: "yyy",
  measurementId: "xxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
