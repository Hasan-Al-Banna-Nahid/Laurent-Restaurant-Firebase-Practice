/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Team.css";
import Sponsor from "../Sponsor/Sponsor";
import ShowTeam from "./ShowTeam";
import { FaStar, FaStarHalf, FaPlus, FaMinus } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Team = () => {
  const id = useLoaderData();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/recipes`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // console.log(data);
      });
  }, []);
  console.log(data);
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
                <Link to={`/recipes/${item.id}`}>
                  <button className="btn btn-outline-danger">See Recipe</button>
                </Link>
              </div>
            </div>
          );
        })}

        {/* <div>
          <img
            src="../../../public/assests/chef2.jpg"
            alt=""
            className="chef mx-auto"
          />
          <h4 className="designation name">Sophie </h4>
          <h5 className="designation">Cook</h5>
          <p className="info">Sophie Is Laurent Official Cook For Best Food</p>
          <p className="experience">7+ Years Of Experience</p>
          <div>
            <h5 className="text-lg text-slate-900 font-semibold">
              Total Recipe : <button className="btn btn-xs">10+</button>
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
            <Link to="/recipes">
              <button className="btn btn-outline-danger">See Recipe</button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="../../../public/assests/chef6.jpg"
            alt=""
            className="chef mx-auto"
          />
          <h4 className="designation name">Nick Woods</h4>
          <h5 className="designation">Sous Chef</h5>
          <p className="info">
            Wood Is Assistant Cook With Mason.He Is Desert Specialist
          </p>
          <p className="experience">6+ Years Of Experience</p>
          <div>
            <h5 className="text-lg text-slate-900 font-semibold">
              Total Recipe : <button className="btn btn-xs">10+</button>
            </h5>
          </div>
          <div className="flex ml-24 p-1">
            <h4 className="font-bold">Likes : 7/10</h4>
          </div>
          <div className="flex my-4 ml-28">
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStarHalf style={{ color: "#fdcb6e" }} />
          </div>
          <div>
            <Link to="/recipes">
              <button className="btn btn-outline-danger">See Recipe</button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="../../../public/assests/chef5.jpg"
            alt=""
            className="chef mx-auto"
          />
          <h4 className="designation name">Mitchel</h4>
          <h5 className="designation">Assistant Chef</h5>
          <p className="info">
            Mitchel Is Assistant Cook With Wood.He Is Traditional Food
            Specialist
          </p>
          <p className="experience">5+ Years Of Experience</p>
          <div>
            <h5 className="text-lg text-slate-900 font-semibold">
              Total Recipe : <button className="btn btn-xs">10+</button>
            </h5>
          </div>
          <div className="flex ml-24 p-1">
            <h4 className="font-bold">Likes : 8/10</h4>
          </div>
          <div className="flex my-4 ml-28">
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStarHalf style={{ color: "#fdcb6e" }} />
          </div>
          <div>
            <Link to="/recipes">
              <button className="btn btn-outline-danger">See Recipe</button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="../../../public/assests/chef7.jpg"
            alt=""
            className="chef mx-auto"
          />
          <h4 className="designation name">Atlas</h4>
          <h5 className="designation">Desert Chef</h5>
          <p className="info">
            Atlas Is Our Prime Desert Cook.He Is Desert Specialist
          </p>
          <p className="experience">8+ Years Of Experience</p>
          <div>
            <h5 className="text-lg text-slate-900 font-semibold">
              Total Recipe : <button className="btn btn-xs">10+</button>
            </h5>
          </div>
          <div className="flex ml-24 p-1">
            <h4 className="font-bold">Likes : 9/10</h4>
          </div>
          <div className="flex my-4 ml-28">
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
          </div>
          <div>
            <Link to="/recipes">
              <button className="btn btn-outline-danger">See Recipe</button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="../../../public/assests/chef4.jpg"
            alt=""
            className="chef mx-auto"
          />
          <h4 className="designation name">Gormand</h4>
          <h5 className="designation">Senior Chef</h5>
          <p className="info">Gormand Is Senior Cook With Mason</p>
          <p className="experience">6+ Years Of Experience</p>
          <div>
            <h5 className="text-lg text-slate-900 font-semibold">
              Total Recipe : <button className="btn btn-xs">10+</button>
            </h5>
          </div>
          <div className="flex ml-24 p-1">
            <h4 className="font-bold">Likes : 9/10</h4>
          </div>
          <div className="flex my-4 ml-28">
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
          </div>
          <div>
            <Link to="/recipes">
              <button className="btn btn-outline-danger">See Recipe</button>
            </Link>
          </div>
        </div>
      </div> */}
      </div>
      <Sponsor />
    </div>
  );
};

export default Team;
