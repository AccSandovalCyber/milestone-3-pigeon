import React, { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";

function Login() {
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
        {user ? (
          <Home user={user} />
        ) : (
          <button className="button" onClick={handleGoogleSignIn}>
            Sign In With Google
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
