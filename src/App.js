import React from 'react';
import Login from './pages/Login'; 
import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import Chatbox from './components/Chatbox';
import './style.scss';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Navbar />
          {/* <Home /> */}
          <CreateUser />
          {/* <Login /> */}
          <Login />
          <Home />
          <Chatbox />
        </div>
      </div>
     </BrowserRouter>
  );
}

export default App;
