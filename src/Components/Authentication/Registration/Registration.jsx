/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { FaAutoprefixer, FaCircle } from "react-icons/fa";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const { emailPasswordSignUpHandler, googleLoginHandler, githubLoginHandler } =
    useContext(AuthContext);

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

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    setSuccess("");
    setError("");

    if (password !== confirmPassword) {
      toast("Sorry!!!Password Didn't Match,Please Try Again");
      return;
    }
    if (password.length < 6) {
      toast("Sorry!!!Password Length Should Be Six Character Long");
      return;
    }
    emailPasswordSignUpHandler(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast("User Created Successfully");
        setSuccess("User Created Successfully");
        setError("");
        form.reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setError(error.message);
        setSuccess("");
        form.reset();
      });
  };

  return (
    <div>
      <div className="register">
        <div className="appleBtn flex">
          <FaCircle style={{ marginRight: "5px", color: "#F16163" }} />{" "}
          <FaCircle style={{ marginRight: "5px", color: "#FCBD37" }} />{" "}
          <FaCircle style={{ color: "#3CC246" }} />
        </div>
        <div className="socialLink">
          <div className="text-center text-2xl font-bold">
            <h4>
              <FaAutoprefixer style={{ color: "#05c46b", fontSize: "2rem" }} />{" "}
              Authentication
            </h4>
            <h5>Login Using With Your Favorite Preference</h5>
            <div style={{ marginTop: "100px" }}>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline btn-success loginBtn"
                style={{ margin: "10px 0" }}
              >
                Login With Google
              </button>
              <br />
              <button
                onClick={handleGithubLogin}
                className="btn btn-outline btn-dark loginBtn"
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
            <p>{error}</p>
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
