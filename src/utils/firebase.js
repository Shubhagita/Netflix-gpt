// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1UsfxCA22lPzNm0Sr6gEItk12V5xV6OI",
  authDomain: "netflix-gpt-e0f39.firebaseapp.com",
  projectId: "netflix-gpt-e0f39",
  storageBucket: "netflix-gpt-e0f39.appspot.com",
  messagingSenderId: "538143977056",
  appId: "1:538143977056:web:663aace5a67953666a9d05",
  measurementId: "G-Y7ZXHLS0PR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
