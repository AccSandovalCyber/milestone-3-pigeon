import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateUser from './components/pages/CreateUser';
import Login from './components/pages/Login';
import './style.scss';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CreateUser />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
