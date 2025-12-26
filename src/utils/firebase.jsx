// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7MaQoyFPkdScIburBel5I2Mo1cyG5BBo",
  authDomain: "netflixgpt-9e51b.firebaseapp.com",
  projectId: "netflixgpt-9e51b",
  storageBucket: "netflixgpt-9e51b.firebasestorage.app",
  messagingSenderId: "252042143564",
  appId: "1:252042143564:web:ebf36da4d674a6182951e9",
  measurementId: "G-MMKPKCXN12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);