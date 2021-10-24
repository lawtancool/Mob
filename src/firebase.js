// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdeAChS8AHur-H7FQwLAtUcEnaYlQXKlE",
  authDomain: "mob-dubhacks21.firebaseapp.com",
  projectId: "mob-dubhacks21",
  storageBucket: "mob-dubhacks21.appspot.com",
  messagingSenderId: "866694741309",
  appId: "1:866694741309:web:96e08a5a384758ee609954"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();