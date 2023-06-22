import React, { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { createBrowserHistory } from 'history';

// import { useNavigate } from "react-router-dom";
// import Home from "../pages/Home";

function Login() {
  const [ setUser] = useState(null);
  const history = createBrowserHistory();
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

      <div className="container1">
      <img src="Beady.png" alt="pigeon" style={{width:150}}></img>


      <button className="button1" onClick={handleGoogleSignIn}>
          Sign In With Google
           
          </button>  
        </div>
       
       
         </div>
  
    
     
    </div>
  );
}

export default Login;
