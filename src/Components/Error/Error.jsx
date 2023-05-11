/* eslint-disable no-unused-vars */
import React from "react";
import "./Error.css";
const Error = () => {
  return (
    <div>
      <div className="error">
        <img
          className="img-fluid"
          src="../../../public/assests/error.jpg"
          alt=""
        />
        <h1 className="font-extrabold text-8xl text-center errorText">
          Sorry!!!Page Not Found
        </h1>
      </div>
    </div>
  );
};

export default Error;
