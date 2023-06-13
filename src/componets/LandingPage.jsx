// In our landing page we are importing auth and googleAuthProvider from firebase.js 
// to handle the login with google button 
import React from 'react';
import { auth, googleAuthProvider } from './firebase';
// import { signInWithPopup } from 'firebase/auth';

const LandingPage = () => {
  const handleLoginWithGoogle = () => {
    auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <div>
      <h1>Welcome To Area 51's Landing Site</h1>
      <button onClick={handleLoginWithGoogle}>Login with Google</button>
    </div>
  );
};

export default LandingPage;
