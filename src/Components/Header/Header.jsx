/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { AuthContext } from "../Authentication/Provider/Provider";

const Header = () => {
  const { user, logOutHandler } = useContext(AuthContext);
  console.log(user);
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
        <div className="link text-decoration-none">
          <Link>Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/blog">Blogs</Link>
          <Link>About Us</Link>
          <Link>Contact Us</Link>
        </div>
        <div style={{ padding: "10px", fontSize: "2rem" }}>
          <Link to="/register">
            {user && (
              <div className="user-container">
                <img
                  style={{
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    padding: "10px",
                    marginLeft: "85px",
                  }}
                  src={user?.photoURL}
                  alt=""
                />
                <div className="email-tooltip">{user?.displayName}</div>
              </div>
            )}

            {user ? (
              <button
                onClick={handleLogOut}
                className="btn btn-wide btn-outline btn-info font-semibold"
              >
                LogOut
              </button>
            ) : (
              <FaSignInAlt />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
