import React from "react";
import TopBar from "./TopBar";
import Navbar from "./NavBar";
import "./header.css";

const Header = () => {
  return (
    <header>
      <TopBar />
      <Navbar />
    </header>
  );
};

export default Header;