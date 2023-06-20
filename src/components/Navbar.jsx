import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import logo from "../Beady.png"

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  // Our NavBar component allows a user to sign in with Google or sign out of the app 
  return (
    <nav className="nav-bar">
      
      <h1>
        <img src={logo} title="Pigeon Logo" width="30" height="30" class="d-inline-block align-top" alt="logo"/>
        Pigeon
      </h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        
          <button className='sign-in' onClick={googleSignIn}> Sign In With Google </button>
      
      )}
    </nav>
  );
};

export default NavBar;