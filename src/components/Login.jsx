import React, { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { createBrowserHistory } from 'history';
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";

function Login() {
  const [user, setUser] = useState(null);
  const history = createBrowserHistory();
  // const navigate = useNavigate();

  // const googleSignIn = () => {
  //   const provider = new GoogleAuthProvider();
  //  signInWithRedirect(auth, provider);
  //   };
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        history.push('/Home');
        // navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="formContainer">
      <div className="signContainer">
        
          <button className="button" onClick={handleGoogleSignIn}>
            Sign In With Google
          </button>
  
      </div>
    </div>
  );
}

export default Login;
