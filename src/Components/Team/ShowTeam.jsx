/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalf, FaPlus, FaMinus } from "react-icons/fa";

const ShowTeam = ({ item }) => {
  return (
    <div>
      <div>
        <div>
          <img src={item.photo} alt="" className="chef mx-auto" />
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
          <div className="flex my-4 ml-28">
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
          </div>

          <div>
            <Link>
              <button className="btn btn-outline-danger">See Recipe</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTeam;
