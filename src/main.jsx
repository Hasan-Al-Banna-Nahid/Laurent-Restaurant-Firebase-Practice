import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Components/Layout/Layout";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Registration from "./Components/Authentication/Registration/Registration";
import Login from "../src/Components/Authentication/Login/Login";
import Provider from "./Components/Authentication/Provider/Provider";
import Recipes from "./Components/Recipes/Recipes";
import MasonRecipe from "./Components/Recipes/MasonRecipe/MasonRecipe";
import ShopieRecipe from "./Components/Recipes/ShopieRecipe/ShopieRecipe";
import WoodsRecipe from "./Components/Recipes/WoodsRecipe/WoodsRecipe";
import MitchelRecipe from "./Components/Recipes/MitchelRecipe/MitchelRecipe";
import AtlasRecipe from "./Components/Recipes/AtlasRecipe/AtlasRecipe";
import GormandRecipes from "./Components/Recipes/GormandRecipes/GormandRecipes";

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
      {
        path: "/recipes",
        element: <Recipes />,
        loader: () => fetch(`http://localhost:5000/recipes`),
      },
      {
        path: "/masonData",
        element: <MasonRecipe />,
      },
      {
        path: "/sophieData",
        element: <ShopieRecipe />,
      },
      {
        path: "/woodsRecipe",
        element: <WoodsRecipe />,
      },
      {
        path: "/MitchelRecipe",
        element: <MitchelRecipe />,
      },
      {
        path: "/atlasRecipe",
        element: <AtlasRecipe />,
      },
      {
        path: "/gormandRecipe",
        element: <GormandRecipes />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
