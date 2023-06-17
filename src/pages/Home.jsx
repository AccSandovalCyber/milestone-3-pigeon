import React from 'react';
import Chatbox from '../components/Chatbox';
import Login from '../pages/Login';

const Home = () => {
    const user = null;
  return (
    <div className='home'>
      <div className="container">
      <section>
        {user ? <Chatbox /> : <Login />}
      </section>
      </div>
    </div>
  )
}

export default Home;
  
