/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { FaAutoprefixer, FaCircle } from "react-icons/fa";
import "./Registration.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { emailPasswordSignUpHandler } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    setSuccess("");
    setError("");

    emailPasswordSignUpHandler(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast("User Created Successfully");
        setSuccess("User Created Successfully");
        setError("");
        form.reset();
      })
      .catch((err) => {
        console.log(err.message);
        setError(error.message);
        setSuccess("");
      });
  };

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
          <form onSubmit={handleSignUp}>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              required
            />

            <input
              type="file"
              name="photo"
              id=""
              placeholder="Your Photo"
              required
            />

            <input
              type="password"
              name="password"
              id=""
              placeholder="Your Password"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              id=""
              placeholder="Please Confirm Password"
              required
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
      <ToastContainer />
    </div>
  );
};

export default Registration;
