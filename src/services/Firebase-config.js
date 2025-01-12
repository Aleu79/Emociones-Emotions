; // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,sendEmailVerification ,sendPasswordResetEmail } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgMqxnFfRhoIt_FpjVuqwSXtuSVmBx8I4",
  authDomain: "emotions-mobile.firebaseapp.com",
  projectId: "emotions-mobile",
  storageBucket: "emotions-mobile.firebasestorage.app",
  messagingSenderId: "595973338961",
  appId: "1:595973338961:web:a309f222613c14b01ec570",
  measurementId: "G-CQ351Z4DY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  

export { auth, createUserWithEmailAndPassword, sendEmailVerification , signInWithEmailAndPassword, sendPasswordResetEmail };