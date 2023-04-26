// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUebsHiFSnsmoOHFDaxIt3jHzNPBb7r-U",
  authDomain: "react-netflix-clone-e629a.firebaseapp.com",
  projectId: "react-netflix-clone-e629a",
  storageBucket: "react-netflix-clone-e629a.appspot.com",
  messagingSenderId: "896705266496",
  appId: "1:896705266496:web:2333dcb475614f4053f0a5",
  measurementId: "G-6GNXRGFWV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);