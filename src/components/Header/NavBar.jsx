import React from "react";
import { FiSearch, FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
import logo from "../../assets/logo.png"
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-center">
        <h1>LOGO</h1>
      </div>

      <div className="nav-right">
        <FiSearch />
        <FiHeart />
        <FiShoppingBag />
        <FiUser />
  ENG <FiChevronDown />

      </div>

      <div className="nav-links">
        <a href="#shop">SHOP</a>
        <a href="#skills">SKILLS</a>
        <a href="#stories">STORIES</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT US</a>
      </div>
    </div>
  );
};

export default Navbar;