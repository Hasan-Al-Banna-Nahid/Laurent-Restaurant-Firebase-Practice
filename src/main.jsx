import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Components/Layout/Layout";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Registration from "./Components/Authentication/Registration/Registration";
import Login from "../src/Components/Authentication/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
