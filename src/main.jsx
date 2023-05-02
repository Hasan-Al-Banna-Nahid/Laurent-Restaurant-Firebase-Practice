import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Components/Layout/Layout";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./Components/Banner/Banner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
