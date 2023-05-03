/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../Authentication/Provider/Provider";

const Header = () => {
  const { user, logOutHandler } = useContext(AuthContext);
  const handleLogOut = () => {
    logOutHandler()
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err.message));
  };
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
          <Link>Blogs</Link>
          <Link>About Us</Link>
          <Link>Contact Us</Link>
        </div>
        <div style={{ padding: "10px", fontSize: "2rem" }}>
          <Link to="/register">
            {user && user.email}

            {user ? <FaSignOutAlt onClick={handleLogOut} /> : <FaSignInAlt />}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
