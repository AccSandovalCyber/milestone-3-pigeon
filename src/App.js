import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './componets/pages/Home';
import CreateUser from './componets/pages/CreateUser';
import Login from './componets/pages/Login';
import './style.scss';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<CreateUser />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
