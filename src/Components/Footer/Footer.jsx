/* eslint-disable no-unused-vars */
import React from "react";
import { FaClock, FaLocationArrow, FaMobile } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ margin: "50px 0" }}>
      <div className="footer">
        <div>
          <div>
            <h3>Our Story</h3>
            <p>
              We Are Best American Food Server With Best Of Chef And
              <br /> Wonderful Collection Of Traditional & Desert Items
              <br />
              According to your needs.
            </p>
            <p>
              <FaClock /> Sat-Fri 8:00 - 10:00
            </p>
            <p>
              <FaClock /> Sunday Closed
            </p>
          </div>
        </div>
        <div>
          <div className="links">
            <h3>Useful Links</h3>
            <Link>Engaging, Purposeful, and Creative</Link>
            <Link>Extroadinary Life Events</Link>
            <Link>Design Your Perfect Event</Link>
            <Link>Connect Your Worlds</Link>
            <Link>Improving Workplace Productivity</Link>
            <Link>Leading Organizations</Link>
          </div>
        </div>
        <div>
          <div>
            <h3>Contact Us</h3>
            <p>
              <FaLocationArrow /> Feni,Chittagong,Bangladesh
            </p>
            <p>
              <FaMobile /> Mobile : +8801896085259
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
