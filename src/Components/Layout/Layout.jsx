/* eslint-disable no-unused-vars */
import React from "react";
import App from "../../App";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Outlet />
    </div>
  );
};

export default layout;
