import React, { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";

function signin() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        navigate("/home");
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
        {user ? (
          <Home user={user} />
        ) : (
         
        )}
      </div>
    </div>
  );
}

export default signin;
