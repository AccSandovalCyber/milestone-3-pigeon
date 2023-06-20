import React from 'react';
import Home from './pages/Home';
// import CreateUser from './pages/CreateUser';
import './style.scss';
import { BrowserRouter } from 'react-router-dom';
// import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Home /> 
        </div>
      </div>
     </BrowserRouter>
  );
}

export default App;