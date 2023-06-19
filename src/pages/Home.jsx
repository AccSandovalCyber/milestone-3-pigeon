import React from 'react';
import Chatbox from '../components/Chatbox';

//chatbox is render using a ternary operator which is a conditonal statement. User prop is true/false
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
const Home = ({ user }) => {
  return (
    <div className='home'>
      <div className="container">
        {user ? <Chatbox user={user} /> : <button> Login </button>} 
      </div>
    </div>
  );
};

export default Home;
  
