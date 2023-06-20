import React from 'react';
import  Navbar from "./Navbar"
import Searchbar from "./Searchbar"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar/>
      <Searchbar/>
    </div>
  );
};

export default Sidebar;