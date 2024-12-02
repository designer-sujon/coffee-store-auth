// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0yle7y_IU4NF3-LaoUu-XClrcIHGUFGU",
  authDomain: "coffee-store-11bad.firebaseapp.com",
  projectId: "coffee-store-11bad",
  storageBucket: "coffee-store-11bad.firebasestorage.app",
  messagingSenderId: "590406626101",
  appId: "1:590406626101:web:1afad66294c35b6ac17a7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);