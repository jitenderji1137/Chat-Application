import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
const NavBar = () => {
    window.scrollTo(0, document.body.scrollHeight);
    const [user] = useAuthState(auth);
    return (
        <nav className="nav-bar">
        <h1>Web Chat</h1>
        {user ?<button onClick={()=>{auth.signOut()}} className="sign-out" type="button">Sign Out</button>:<button onClick={()=>{signInWithRedirect(auth, new GoogleAuthProvider())}} className="sign-out" type="button">Sign in with Google</button>}
        </nav>
    );
};
export default NavBar;