import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCr89tryLCDib-KOC4e6aleWni8iBdxfTo",
    authDomain: "chat-application-8ff7d.firebaseapp.com",
    projectId: "chat-application-8ff7d",
    storageBucket: "chat-application-8ff7d.appspot.com",
    messagingSenderId: "1000522788422",
    appId: "1:1000522788422:web:6db8ac69aaf60d5439e447",
    measurementId: "G-P0CQLB2403"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);