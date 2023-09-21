// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpoNqeDuxGbw34NKgXs19oa7hluj5QWjM",
  authDomain: "imagebox-ed45e.firebaseapp.com",
  projectId: "imagebox-ed45e",
  storageBucket: "imagebox-ed45e.appspot.com",
  messagingSenderId: "276373789702",
  appId: "1:276373789702:web:c5f8857c97fa477d2ff787",
  measurementId: "G-Q7T1QQ74G4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
