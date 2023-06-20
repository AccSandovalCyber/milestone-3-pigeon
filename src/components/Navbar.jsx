import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

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
<<<<<<< HEAD
    <nav className="nav-bar">
      <h1>Pigeon</h1>
=======
    <nav className="nav-bar"> 
      <h1>React Chat</h1>
>>>>>>> 5cd2c4ab8a73020b8a83b6c7f89c2b1ac1fbca2e
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