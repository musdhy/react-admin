// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvXvmTlBf2dD9QMqzEyENYnFPXbR0PWe0",
  authDomain: "react-admin-15715.firebaseapp.com",
  projectId: "react-admin-15715",
  storageBucket: "react-admin-15715.appspot.com",
  messagingSenderId: "1088775418059",
  appId: "1:1088775418059:web:fc1d031aaa816c561dab4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
