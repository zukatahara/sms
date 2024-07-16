// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsoAIXn30-tWRVy6ugmPOrWvBvIZ88kZI",
  authDomain: "authapp-af5eb.firebaseapp.com",
  projectId: "authapp-af5eb",
  storageBucket: "authapp-af5eb.appspot.com",
  messagingSenderId: "783289513643",
  appId: "1:783289513643:web:249d3d056f4ccba3b869ee",
  measurementId: "G-JXCKV1YWP7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
