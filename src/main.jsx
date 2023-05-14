import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Components/Layout/Layout";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Registration from "./Components/Authentication/Registration/Registration";
import Login from "../src/Components/Authentication/Login/Login";
import Provider from "./Components/Authentication/Provider/Provider";
import MasonRecipe from "./Components/Recipes/MasonRecipe/MasonRecipe";
import ShopieRecipe from "./Components/Recipes/ShopieRecipe/ShopieRecipe";
import WoodsRecipe from "./Components/Recipes/WoodsRecipe/WoodsRecipe";
import MitchelRecipe from "./Components/Recipes/MitchelRecipe/MitchelRecipe";
import AtlasRecipe from "./Components/Recipes/AtlasRecipe/AtlasRecipe";
import GormandRecipes from "./Components/Recipes/GormandRecipes/GormandRecipes";
import Blog from "./Components/Blog/Blog";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Error from "./Components/Error/Error";
import Team from "./Components/Team/Team";
import Recipes from "./Components/Recipes/Recipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/team/:id",
        element: <Team />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipes/${params.id}`),
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
        path: "/recipes/:id",
        element: (
          <ProtectedRoute>
            <Recipes />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipes/${params.id}`),
      },
      {
        path: "/masonData",
        element: (
          <ProtectedRoute>
            <MasonRecipe />
          </ProtectedRoute>
        ),
      },
      {
        path: "/sophieData",
        element: (
          <ProtectedRoute>
            <ShopieRecipe />
          </ProtectedRoute>
        ),
      },
      {
        path: "/woodsRecipe",
        element: (
          <ProtectedRoute>
            <WoodsRecipe />
          </ProtectedRoute>
        ),
      },
      {
        path: "/MitchelRecipe",
        element: (
          <ProtectedRoute>
            <MitchelRecipe />
          </ProtectedRoute>
        ),
      },
      {
        path: "/atlasRecipe",
        element: (
          <ProtectedRoute>
            <AtlasRecipe />
          </ProtectedRoute>
        ),
      },
      {
        path: "/gormandRecipe",
        element: (
          <ProtectedRoute>
            <GormandRecipes />
          </ProtectedRoute>
        ),
      },

      {
        path: "/blog",
        element: <Blog />,
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
