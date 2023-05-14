/* eslint-disable no-unused-vars */
import React from "react";
import "./Sponsor.css";
import Marquee from "react-fast-marquee";
import LazyLoad from "react-lazy-load";

const Sponsor = () => {
  return (
    <div style={{ margin: "50px 0" }}>
      <h3 className="title">Our Sponsors</h3>
      <Marquee pauseOnHover={true} className="marquee">
        <div className="sponsors">
          <div>
            <LazyLoad>
              <img src="../../../public/assests/sponsor1.png" alt="" />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img src="../../../public/assests/sponsor2.png" alt="" />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img src="../../../public/assests/sponsor3.png" alt="" />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img src="../../../public/assests/sponsor4.png" alt="" />
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <img src="../../../public/assests/sponsor5.png" alt="" />
            </LazyLoad>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Sponsor;
