/* eslint-disable no-unused-vars */
import React from "react";
import "./Recipes.css";
import { Link } from "react-router-dom";

const Recipes = () => {
  return (
    <div className="recipes">
      <div>
        <div style={{ marginBottom: "20px" }}>
          <Link to="/masonData">
            <button className="btn btn-primary">
              Star-Studded Blueberry Pie
            </button>
          </Link>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <Link to="/sophieData">
            <button className="btn btn-primary">
              Texas-Style Beef Brisket
            </button>
          </Link>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <Link to="/woodsRecipe">
            <button className="btn btn-primary">
              All-American Banana Split
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: "20px" }}>
          <Link to="/MitchelRecipe">
            <button className="btn btn-primary">
              Wisconsin Butter-Basted Burgers
            </button>
          </Link>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <Link to="/atlasRecipe">
            <button className="btn btn-primary">
              Big & Buttery Chocolate Chip Cookies
            </button>
          </Link>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <Link to="/gormandRecipe">
            <button className="btn btn-primary">Tater Tot Casseroles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
