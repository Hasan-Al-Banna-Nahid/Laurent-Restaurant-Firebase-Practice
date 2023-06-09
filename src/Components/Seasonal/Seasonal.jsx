/* eslint-disable no-unused-vars */
import React from "react";
import "./Seasonal.css";
import Team from "../Team/Team";
import Menu from "../FoodMenu/Menu";

const Seasonal = () => {
  return (
    <div style={{ margin: "20px auto" }}>
      <div>
        <h2 className="title">Seasonal</h2>
        <hr />
        <h4 className="subtitle my-4 text-3xl">Enjoy Every Moment</h4>
      </div>
      <div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img
                src="../../../public/assests/s1.jpg"
                className="card-img-top image"
                alt="..."
              />
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-evenly price">
                  <div className="mr-2">
                    <h5 className="card-title title text-6xl">
                      <sup>$</sup>50
                    </h5>
                  </div>
                  <div>
                    <h4 className="package text-lg">Starter</h4>
                    <p className="card-text subtitle">
                      Try Our Everyday Starter At Reasonable Price
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="../../../public/assests/s2.jpg"
                className="card-img-top image"
                alt="..."
              />
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-evenly price">
                  <div className="price mr-2">
                    <h5 className="card-title title text-6xl">
                      <sup>$</sup>100
                    </h5>
                  </div>
                  <div>
                    <h4 className="package text-lg">Premium</h4>
                    <p className="card-text subtitle">
                      Try Our Holiday Special At Happy Price
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Seasonal;
