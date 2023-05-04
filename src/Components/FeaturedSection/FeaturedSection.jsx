/* eslint-disable no-unused-vars */
import React from "react";
import "./FeaturedSection.css";
import Seasonal from "../Seasonal/Seasonal";

const FeaturedSection = () => {
  return (
    <div style={{ margin: "20px auto" }}>
      <div>
        <h2 className="title">Who We Are?</h2>
        <hr />
        <h4 className="subtitle">Everything You Want To Know</h4>
      </div>
      <div className="card-group mx-auto px-5">
        <div className="card">
          <img
            src="../../../public/assests/food.jpg"
            className="card-img-top rounded-2"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Fresh Taste</h5>
            <p className="card-text">
              A light and crisp taste. Often used to describe produce or herbs.
              Fruity: Any taste reminiscent of sweet fruit flavors. Full-bodied:
              Rich flavor that can feel heavy in the mouth.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="../../../public/assests/food2.jpg"
            className="card-img-top rounded-2"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Made With Love</h5>
            <p className="card-text">
              There are numerous terms that could be used to describe a person
              who is passionate about food and cooking. Like "food lover" or
              "gourmand" or "cuisine connoisseur" or even "food nerd." However,
              in our modern culture, "foodie" is the label that seems to stick
              like an al dente noodle on a wall.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="../../../public/assests/dish2.jpg"
            className="card-img-top rounded-2"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Taste The Difference</h5>
            <p className="card-text">
              Try Our Food And You Feel The Difference.
            </p>
          </div>
        </div>
      </div>
      <Seasonal />
    </div>
  );
};

export default FeaturedSection;
