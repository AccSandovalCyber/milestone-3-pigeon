import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
// import Login from './pages/Login';
import './style.scss';
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
        </div>
      </div>
     </BrowserRouter>
  );
}

export default App;
