import React from 'react';
import Login from './pages/Login'; 
import Home from './pages/Home';
// import CreateUser from './pages/CreateUser';
import './style.scss';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Navbar />
          <Login />
<<<<<<< HEAD
=======
          <Home /> 
>>>>>>> 2333d717478f44d4ab55c95acb2118c5a5368ecf
        </div>
      </div>
     </BrowserRouter>
  );
}

export default App;


