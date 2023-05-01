// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr89tryLCDib-KOC4e6aleWni8iBdxfTo",
  authDomain: "chat-application-8ff7d.firebaseapp.com",
  projectId: "chat-application-8ff7d",
  storageBucket: "chat-application-8ff7d.appspot.com",
  messagingSenderId: "1000522788422",
  appId: "1:1000522788422:web:6db8ac69aaf60d5439e447",
  measurementId: "G-P0CQLB2403"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);