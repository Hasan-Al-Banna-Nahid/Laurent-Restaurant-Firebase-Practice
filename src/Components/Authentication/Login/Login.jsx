/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./Login.css";
import { FaAutoprefixer, FaCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { user, loginHandler, googleLoginHandler, githubLoginHandler } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLoginHandler()
      .then((result) => {
        const user = result.user;
        toast("Login With Google Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleGithubLogin = () => {
    githubLoginHandler()
      .then((result) => {
        const user = result.user;
        toast("Login With Github Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginHandler(email, password)
      .then((result) => {
        const loggedUser = result.user;
        toast("User Login Successfully");
        navigate("/");
      })
      .catch((err) => {
        toast("Sorry!!!Your Email & Password Did Not Match");
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
            <h5>Login Using With Your Favorite Preference</h5>
            <div style={{ marginTop: "100px" }}>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline-success loginBtn"
                style={{ margin: "10px 0" }}
              >
                Login With Google
              </button>
              <br />
              <button
                onClick={handleGithubLogin}
                className="btn btn-outline-dark loginBtn"
                style={{ margin: "30px 0" }}
              >
                Login With Github
              </button>
              <br />
            </div>
          </div>
        </div>
        <div className="loginCredential">
          <h4
            style={{ textAlign: "center", fontSize: "2rem", fontWeight: "800" }}
          >
            Please Login
          </h4>
          <form onSubmit={handleLogin}>
            <input type="email" name="email" id="" placeholder="Your Email" />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Your Password"
            />

            <div>
              <button className="btn btn-primary fs-2 w-100">Sign In</button>
            </div>
            <div
              style={{ color: "#3c40c6", padding: "10px", fontSize: "1.6rem" }}
            >
              New To Laurent? Please{" "}
              <Link style={{ textDecoration: "underline" }} to="/register">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
