/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Team.css";
import Sponsor from "../Sponsor/Sponsor";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Team = () => {
  return (
    <div style={{ margin: "60px 0" }}>
      <h3 className="title">The Team</h3>
      <h5 className="subtitle" style={{ margin: "20px 0" }}>
        Meet Our Chefs
      </h5>
      <div className="team">
        <div>
          <img
            src="../../../public/assests/chef1.jpg"
            alt=""
            className="chef"
          />
          <h4 className="designation name">Mason Robinson</h4>
          <h5 className="designation">Chef</h5>
          <p className="info">
            Mason Is Our Main Chef for last few Years with his deliciousness
            Food Experience
          </p>
          <p className="experience">8+ Years Of Experience</p>
          <div>
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
          </div>
        </div>
        <div>
          <img
            src="../../../public/assests/chef2.jpg"
            alt=""
            className="chef"
          />
          <h4 className="designation name">Sophie </h4>
          <h5 className="designation">Cook</h5>
          <p className="info">
            Sophie Is Laurent Official Cook For Best Serving Food
          </p>
          <p className="experience">7+ Years Of Experience</p>
          <div>
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
          </div>
        </div>
        <div>
          <img
            src="../../../public/assests/chef6.jpg"
            alt=""
            className="chef"
          />
          <h4 className="designation name">Nick Woods</h4>
          <h5 className="designation">Sous Chef</h5>
          <p className="info">
            Wood Is Assistant Cook With Mason.He Is Desert Specialist
          </p>
          <p className="experience">6+ Years Of Experience</p>
          <div>
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStarHalf style={{ color: "#fdcb6e" }} />
          </div>
        </div>
        <div>
          <img
            src="../../../public/assests/chef5.jpg"
            alt=""
            className="chef"
          />
          <h4 className="designation name">Mitchel</h4>
          <h5 className="designation">Assistant Chef</h5>
          <p className="info">
            Mitchel Is Assistant Cook With Wood.He Is Traditional Food
            Specialist
          </p>
          <p className="experience">5+ Years Of Experience</p>
          <div>
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStarHalf style={{ color: "#fdcb6e" }} />
          </div>
        </div>
        <div>
          <img
            src="../../../public/assests/chef7.jpg"
            alt=""
            className="chef"
          />
          <h4 className="designation name">Atlas</h4>
          <h5 className="designation">Desert Chef</h5>
          <p className="info">
            Atlas Is Our Prime Desert Cook.He Is Desert Specialist
          </p>
          <p className="experience">8+ Years Of Experience</p>
          <div>
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
          </div>
        </div>
        <div>
          <img
            src="../../../public/assests/chef4.jpg"
            alt=""
            className="chef"
          />
          <h4 className="designation name">Gormand</h4>
          <h5 className="designation">Senior Chef</h5>
          <p className="info">Gormand Is Senior Cook With Mason.</p>
          <p className="experience">6+ Years Of Experience</p>
          <div>
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
            <FaStar style={{ color: "#fdcb6e" }} />
          </div>
        </div>
      </div>
      <Sponsor />
    </div>
  );
};

export default Team;
