// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuWEOcQgtARQ2UBYhjnYxhJGh6O9ypUkI",
  authDomain: "fastingapp-7d76d.firebaseapp.com",
  projectId: "fastingapp-7d76d",
  storageBucket: "fastingapp-7d76d.appspot.com",
  messagingSenderId: "567760406719",
  appId: "1:567760406719:web:f655502f98dbca2ffb9e0a",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

// Enable Google sign-in
export const provider = new GoogleAuthProvider();

// my config:

// const firebaseConfig = {
//   apiKey: "AIzaSyB1JoP6iZY6GtSg-N9GfZujjonVw_Dy2sA",
//   authDomain: "mealmaster-8835a.firebaseapp.com",
//   projectId: "mealmaster-8835a",
//   storageBucket: "mealmaster-8835a.appspot.com",
//   messagingSenderId: "141175317874",
//   appId: "1:141175317874:web:8ab4b417742286554f69eb",
// };