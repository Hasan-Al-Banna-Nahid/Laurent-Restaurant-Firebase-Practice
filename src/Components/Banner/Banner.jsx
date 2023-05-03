/* eslint-disable no-unused-vars */
import React from "react";
import "./Banner.css";
import FeaturedSection from "../FeaturedSection/FeaturedSection";

const Banner = () => {
  return (
    <div className="w-100">
      <div id="carouselExample" className="carousel slide rounded-2 mx-auto ">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../../../public/assests/wallpaperflare.com_wallpaper (1).jpg"
              className="d-block w-100 banner-image"
              alt="..."
            />
            <div className="carousel-caption  d-md-block caption1">
              <h5>Texas-Style Beef Brisket</h5>
              <p>A Traditional Texas Beef Item</p>
              <button
                style={{ color: "#2f3542", fontWeight: "bold" }}
                className="btn btn-primary"
              >
                See Recipe
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../../../public/assests/wallpaperflare.com_wallpaper (2).jpg"
              className="d-block w-100 banner-image"
              alt="..."
            />
            <div className="carousel-caption  d-md-block caption2">
              <h5>HamBurger With French Fries</h5>
              <p>Wonderful Combination Of Burger & Fries</p>
              <button
                style={{ color: "#2f3542", fontWeight: "bold" }}
                className="btn btn-primary"
              >
                See Recipe
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../../../public/assests/tea.jpg"
              className="d-block w-100 banner-image"
              alt="..."
            />
            <div className="carousel-caption  d-md-block caption3">
              <h5>Black Coffee With Hand Made Biscuit</h5>
              <p>Strong Combination Of Coffee & Biscuit</p>
              <button
                style={{ color: "#130f40", fontWeight: "bold" }}
                className="btn btn-primary"
              >
                See Recipe
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <FeaturedSection />
    </div>
  );
};

export default Banner;
