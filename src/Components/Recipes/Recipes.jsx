/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Recipes.css";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();

  const handleNavigate = () => {
    navigate(-1);
  };
  const handleFavorite = () => {
    toast(`Added To Favorite`);
    setIsClicked(!isClicked);
  };
  const data = useLoaderData();
  const {
    recipe1,
    recipe2,
    recipe3,
    name,
    designation,
    photo,
    bio,
    rating,
    experience,
    likes,
    numberOfRecipes,
  } = data;

  return (
    <div>
      <div>
        <h3 className="title">Chef</h3>
        <div className="card w-96 glass mx-auto">
          <figure>
            <img src={photo} alt="Chef!" className="rounded-md w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-3xl">{name}</h2>
            <p className="font-bold">{bio}</p>
            <p className="font-bold">Likes : {rating}</p>
            <p className="font-bold">Recipes : {numberOfRecipes}</p>
            <p className="font-bold">Experience : {experience}</p>
          </div>
        </div>
      </div>
      <h3 className="title">Recipes</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div>
            <div className="card">
              <img src={recipe1?.photo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-2xl text-slate-800 font-bold">
                  Name : {recipe1?.name}
                </h5>
                <div className="card-text">
                  <h3 className="font-bold text-2xl underline text-red-800">
                    Ingredients
                  </h3>
                  <ol className="my-4 font-bold text-2xl leading-10">
                    <li>
                      <FaCircle style={{ color: "red" }} />{" "}
                      {recipe1?.Ingredients?.one}
                    </li>
                    <li>
                      <FaCircle style={{ color: "red" }} />
                      {recipe1?.Ingredients?.two}
                    </li>
                    <li>
                      <FaCircle style={{ color: "red" }} />{" "}
                      {recipe1?.Ingredients?.three}
                    </li>
                    <li>
                      <FaCircle style={{ color: "red" }} />{" "}
                      {recipe1?.Ingredients?.four}
                    </li>
                    <li>
                      <FaCircle style={{ color: "red" }} />{" "}
                      {recipe1?.Ingredients?.five}
                    </li>
                    <li>
                      <FaCircle style={{ color: "red" }} />{" "}
                      {recipe1?.Ingredients?.six}
                    </li>
                    <li>
                      <FaCircle style={{ color: "red" }} />{" "}
                      {recipe1?.Ingredients?.seven}
                    </li>
                  </ol>
                  <hr />
                  <h3 className="font-bold text-2xl underline text-orange-800">
                    Directions
                  </h3>
                  <ol className="my-4 font-bold text-2xl leading-10 ">
                    <li>
                      <FaCircle style={{ color: "yellow" }} />{" "}
                      {recipe1?.Directions?.one}
                    </li>
                    <li>
                      <FaCircle style={{ color: "yellow" }} />{" "}
                      {recipe1?.Directions?.two}
                    </li>
                    <li>
                      <FaCircle style={{ color: "yellow" }} />{" "}
                      {recipe1?.Directions?.three}
                    </li>
                    <li>
                      <FaCircle style={{ color: "yellow" }} />{" "}
                      {recipe1?.Directions?.four}
                    </li>
                  </ol>
                </div>
                <h4 className="text-4xl font-bold text-gray-900">
                  Rating : 10/10
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="card">
              <img src={recipe2?.photo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-slate-800 font-bold text-2xl">
                  Name : {recipe2?.name}
                </h5>
                <p className="card-text">
                  <h3 className="font-bold text-2xl underline text-red-800">
                    Ingredients
                  </h3>
                  <ol className="my-4 font-bold text-2xl leading-10">
                    <li>
                      <FaCircle style={{ color: "red" }} />{" "}
                      {recipe2?.Ingredients?.one}
                    </li>
                    <li>
                      <FaCircle style={{ color: "red" }} />{" "}
                      {recipe2?.Ingredients?.two}
                    </li>
                    <li>
                      <FaCircle style={{ color: "red" }} />{" "}
                      {recipe2?.Ingredients?.three}
                    </li>
                    <li>
                      <FaCircle style={{ color: "red" }} />{" "}
                      {recipe2?.Ingredients?.four}
                    </li>
                    <li>
                      <FaCircle style={{ color: "red" }} />{" "}
                      {recipe2?.Ingredients?.five}
                    </li>
                    <li>
                      <FaCircle style={{ color: "red" }} />{" "}
                      {recipe2?.Ingredients?.six}
                    </li>
                    <li>
                      <FaCircle style={{ color: "red" }} />{" "}
                      {recipe2?.Ingredients?.seven}
                    </li>
                    <li>
                      <FaCircle style={{ color: "red" }} />{" "}
                      {recipe2?.Ingredients?.eight}
                    </li>
                    <li>
                      <FaCircle style={{ color: "red" }} />{" "}
                      {recipe2?.Ingredients?.nine}
                    </li>
                    <li>
                      <FaCircle style={{ color: "red" }} />{" "}
                      {recipe2?.Ingredients?.ten}
                    </li>
                  </ol>
                  <hr />
                  <h3 className="font-bold text-2xl underline text-orange-800">
                    Directions
                  </h3>
                  <ol className="my-4 font-bold text-2xl leading-10 ">
                    <li>
                      <FaCircle style={{ color: "yellow" }} />{" "}
                      {recipe2?.Directions?.one}
                    </li>
                    <li>
                      <FaCircle style={{ color: "yellow" }} />{" "}
                      {recipe2?.Directions?.two}
                    </li>
                    <li>
                      <FaCircle style={{ color: "yellow" }} />{" "}
                      {recipe2?.Directions?.three}
                    </li>
                    <li>
                      <FaCircle style={{ color: "yellow" }} />{" "}
                      {recipe2?.Directions?.four}
                    </li>
                    <li>
                      <FaCircle style={{ color: "yellow" }} />{" "}
                      {recipe2?.Directions?.five}
                    </li>
                  </ol>
                </p>
                <h4 className="text-4xl font-bold text-gray-900">
                  Rating : 10/10
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={recipe3?.photo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-slate-800 font-bold text-2xl">
                Name : {recipe3?.name}
              </h5>
              <div className="card-text">
                <h3 className="font-bold text-2xl underline text-red-800">
                  Ingredients
                </h3>
                <ol className="my-4 font-bold text-2xl leading-10">
                  <li>
                    <FaCircle style={{ color: "red" }} />{" "}
                    {recipe3?.Ingredients?.one}
                  </li>
                  <li>
                    <FaCircle style={{ color: "red" }} />{" "}
                    {recipe3?.Ingredients?.two}
                  </li>
                  <li>
                    <FaCircle style={{ color: "red" }} />{" "}
                    {recipe3?.Ingredients?.three}
                  </li>
                  <li>
                    <FaCircle style={{ color: "red" }} />{" "}
                    {recipe3?.Ingredients?.four}
                  </li>
                  <li>
                    <FaCircle style={{ color: "red" }} />{" "}
                    {recipe3?.Ingredients?.five}
                  </li>
                  <li>
                    <FaCircle style={{ color: "red" }} />{" "}
                    {recipe3?.Ingredients?.six}
                  </li>
                  <li>
                    <FaCircle style={{ color: "red" }} />{" "}
                    {recipe3?.Ingredients?.seven}
                  </li>
                </ol>
                <hr />
                <h3 className="font-bold text-2xl underline text-orange-800">
                  Directions
                </h3>
                <ol className="my-4 font-bold text-2xl leading-10 ">
                  <li>
                    <FaCircle style={{ color: "yellow" }} />{" "}
                    {recipe3?.Directions?.one}
                  </li>
                  <li>
                    <FaCircle style={{ color: "yellow" }} />{" "}
                    {recipe3?.Directions?.two}
                  </li>
                  <li>
                    <FaCircle style={{ color: "yellow" }} />{" "}
                    {recipe3?.Directions?.three}
                  </li>
                  <li>
                    <FaCircle style={{ color: "yellow" }} />{" "}
                    {recipe3?.Directions?.four}
                  </li>
                </ol>
              </div>
              <h4 className="text-4xl font-bold text-gray-900">
                Rating : 10/10
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full">
        <button
          onClick={handleFavorite}
          disabled={isClicked}
          className="btn btn-outline-danger my-4 w-full"
        >
          Add To Favorite
        </button>
      </div>
      <div style={{ marginLeft: "380px" }}>
        <button
          className="btn btn-outline-danger w-96"
          onClick={handleNavigate}
        >
          Go Back
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Recipes;
