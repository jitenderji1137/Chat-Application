import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
const Welcome = () => {
    return (
        <div className="center">
        <main className="welcome">
        <h2>Welcome to Web Chat</h2>
        <p>Sign in with Google to chat with with Us</p>
        <button onClick={()=>{signInWithRedirect(auth, new GoogleAuthProvider())}} className="sign-out" type="button">Sign in with Google</button>
        </main>
        </div>
    );
};

export default Welcome;