/* eslint-disable no-unused-vars */
import React from "react";
import "./Sponsor.css";
import Marquee from "react-fast-marquee";

const Sponsor = () => {
  return (
    <div style={{ margin: "50px 0" }}>
      <h3 className="title">Our Sponsors</h3>
      <Marquee pauseOnHover={true} className="marquee">
        <div className="sponsors">
          <div>
            <img src="../../../public/assests/sponsor1.png" alt="" />
          </div>
          <div>
            <img src="../../../public/assests/sponsor2.png" alt="" />
          </div>
          <div>
            <img src="../../../public/assests/sponsor3.png" alt="" />
          </div>
          <div>
            <img src="../../../public/assests/sponsor4.png" alt="" />
          </div>
          <div>
            <img src="../../../public/assests/sponsor5.png" alt="" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Sponsor;
