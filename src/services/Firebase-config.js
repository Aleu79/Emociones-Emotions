// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Reemplaza los valores con los datos de tu proyecto en Firebase Console
const firebaseConfig = {
  apiKey: "TU_API_KEY", // Clave única para interactuar con Firebase
  authDomain: "TU_DOMINIO.firebaseapp.com", // Dominio asociado para autenticación
  projectId: "TU_PROJECT_ID", // ID del proyecto de Firebase
  storageBucket: "TU_BUCKET.appspot.com", // Ruta para el almacenamiento
  messagingSenderId: "TU_SENDER_ID", // ID para mensajes (Cloud Messaging)
  appId: "TU_APP_ID", // Identificador único de la aplicación
  measurementId: "TU_MEASUREMENT_ID" // Opcional: ID para Google Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail };