/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar">
        <div>
          <img
            src="../../../public/assests/Laurent-removebg-preview.png"
            alt=""
            className="logo"
          />
        </div>
        <div>
          <Link>Home</Link>
          <Link>Recipes</Link>
          <Link>About Us</Link>
          <Link>Contact Us</Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
