// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAkDRkoCVEXf8RUOC2jQm4w3CkdZOqLTgc",
  authDomain: "miniproject-b9d85.firebaseapp.com",
  projectId: "miniproject-b9d85",
  storageBucket: "miniproject-b9d85.appspot.com",
  messagingSenderId: "318246539716",
  appId: "1:318246539716:web:e1d72cb7331ad18ca85491"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
