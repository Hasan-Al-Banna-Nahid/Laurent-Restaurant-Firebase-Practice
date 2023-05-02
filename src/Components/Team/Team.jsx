/* eslint-disable no-unused-vars */
import React from "react";
import "./Team.css";
import Sponsor from "../Sponsor/Sponsor";

const Team = () => {
  return (
    <div style={{ margin: "50px 0" }}>
      <h3 className="title">The Team</h3>
      <h5 className="subtitle">Meet Our Chefs</h5>
      <div className="team">
        <div>
          <img
            src="../../../public/assests/chef2.jpg"
            alt=""
            className="chef"
          />
          <h4 className="designation name">Mason Robinson</h4>
          <h5 className="designation">Chef</h5>
          <p className="info">
            Mason Is Our Main Chef for last few Years with his deliciousness
            Food Experience
          </p>
        </div>
        <div>
          <img
            src="../../../public/assests/chef1.jpg"
            alt=""
            className="chef"
          />
          <h4 className="designation name">Sophie </h4>
          <h5 className="designation">Cook</h5>
          <p className="info">
            Sophie Is Laurent Official Cook For Best Serving Food
          </p>
        </div>
        <div>
          <img
            src="../../../public/assests/chef3.jpg"
            alt=""
            className="chef"
          />
          <h4 className="designation name">Nick Woods</h4>
          <h5 className="designation">Sous Chef</h5>
          <p className="info">
            Wood Is Assistant Cook With Mason.He Is Desert Specialist
          </p>
        </div>
      </div>
      <Sponsor />
    </div>
  );
};

export default Team;
