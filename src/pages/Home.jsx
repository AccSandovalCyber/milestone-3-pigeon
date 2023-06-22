import React from 'react';
import Chatbox from '../components/Chatbox'
import Navbar from "../components/Navbar"
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPage from './LoginPage'

const Home = () => {
  const [user] = useAuthState(auth);
  
  return (
    <> 
    <div className="login">
    
     </div>
    <div className='home'>
      <div className="container">

        {user ? (
          <>
            <Navbar />
            <Chatbox /> 
          </>
        ) : (<LoginPage />
         
        )}
      </div>
    </div>

 </>
  );
};

export default Home;