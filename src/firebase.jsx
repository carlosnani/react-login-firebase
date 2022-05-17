import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; 


const firebaseConfig = {
  apiKey: "AIzaSyC65y6Ycqje7icMGgKBKA8P1mfYQDQz6Uk",
  authDomain: "react-firebase-auth-93091.firebaseapp.com",
  projectId: "react-firebase-auth-93091",
  storageBucket: "react-firebase-auth-93091.appspot.com",
  messagingSenderId: "9970660657",
  appId: "1:9970660657:web:00232af072700758fbec10"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

 