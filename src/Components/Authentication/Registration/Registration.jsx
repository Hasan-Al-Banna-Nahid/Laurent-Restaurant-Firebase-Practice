/* eslint-disable no-unused-vars */
import React from "react";
import { FaAutoprefixer, FaCircle } from "react-icons/fa";
import "./Registration.css";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <div className="register">
        <p className="appleBtn">
          <FaCircle style={{ marginRight: "5px", color: "#F16163" }} />{" "}
          <FaCircle style={{ marginRight: "5px", color: "#FCBD37" }} />{" "}
          <FaCircle style={{ color: "#3CC246" }} />
        </p>
        <div className="socialLink">
          <div className="text-center">
            <h4>
              <FaAutoprefixer style={{ color: "#05c46b", fontSize: "2rem" }} />{" "}
              Authentication
            </h4>
            <h5>Login Using Your Favorite Preference</h5>
            <div>
              <button
                className="btn btn-outline-success"
                style={{ margin: "10px 0" }}
              >
                Login With Google
              </button>
              <br />
              <button
                className="btn btn-outline-dark"
                style={{ margin: "30px 0" }}
              >
                Login With Github
              </button>
              <br />
              <button className="btn btn-outline-info">
                Login With Email-Password
              </button>
            </div>
          </div>
        </div>
        <div className="loginCredential">
          <h4
            style={{ textAlign: "center", fontSize: "2rem", fontWeight: "800" }}
          >
            Sign Up For Free
          </h4>
          <form>
            <input type="text" name="name" id="" placeholder="Your Full Name" />
            <input type="email" name="email" id="" placeholder="Your Email" />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Your Password"
            />
            <input
              type="password"
              name="confirmPassword"
              id=""
              placeholder="Please Confirm Password"
            />
            <div>
              <button className="btn btn-primary fs-2 w-100">Register</button>
            </div>
            <div
              style={{ color: "#3c40c6", padding: "10px", fontSize: "1.6rem" }}
            >
              Already Have An Account? Please{" "}
              <Link style={{ textDecoration: "underline" }} to="/login">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
