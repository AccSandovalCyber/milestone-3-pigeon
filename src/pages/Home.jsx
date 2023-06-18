import React from 'react';
import Chatbox from '../components/Chatbox';

const Home = ({ user }) => {
  return (
    <div className='home'>
      <div className="container">
        {user ? <Chatbox user={user} /> : 'login'}
      </div>
    </div>
  );
};

export default Home;
  
