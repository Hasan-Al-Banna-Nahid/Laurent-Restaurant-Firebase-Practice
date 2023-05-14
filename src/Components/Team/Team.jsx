/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Team.css";
import Sponsor from "../Sponsor/Sponsor";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Team = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/chefData`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div style={{ margin: "60px 0" }}>
      <h3 className="title">The Team</h3>
      <h5 className="subtitle text-3xl" style={{ margin: "20px 0" }}>
        Meet Our Chefs
      </h5>
      <div className="team">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <LazyLoad>
                <img src={item.photo} alt="" className="chef mx-auto" />
              </LazyLoad>
              <h4 className="designation name">{item.name}</h4>
              <h5 className="designation">{item.designation}</h5>
              <p className="info">{item.bio}</p>
              <p className="experience">{item.experience}</p>
              <div>
                <h5 className="text-lg text-slate-900 font-semibold">
                  Total Recipe :{" "}
                  <button className="btn btn-xs">{item.numberOfRecipes}</button>
                </h5>
              </div>
              <div className="flex ml-24 p-1">
                <h4 className="font-bold">Likes : 10/10</h4>
              </div>
              <div className="flex my-4 ml-32">
                <FaStar style={{ color: "#fdcb6e" }} />
                <FaStar style={{ color: "#fdcb6e" }} />
                <FaStar style={{ color: "#fdcb6e" }} />
                <FaStar style={{ color: "#fdcb6e" }} />
                <FaStar style={{ color: "#fdcb6e" }} />
              </div>

              <div>
                <Link to={`/recipes/${item.id}`}>
                  <button className="btn btn-outline-danger">See Recipe</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Sponsor />
    </div>
  );
};

export default Team;
