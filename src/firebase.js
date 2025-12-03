// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-e3V0ffrTb1m_WheKU3cWfNvNhh8NeLM",
  authDomain: "beco-2439b.firebaseapp.com",
  projectId: "beco-2439b",
  storageBucket: "beco-2439b.firebasestorage.app",
  messagingSenderId: "28725899674",
  appId: "1:28725899674:web:00904193cf59f80368ca23"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore();