/* eslint-disable no-unused-vars */
import React from "react";
import "./FeaturedSection.css";

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
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
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
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="../../../public/assests/berry.jpg"
            className="card-img-top rounded-2"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Taste The Difference</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
