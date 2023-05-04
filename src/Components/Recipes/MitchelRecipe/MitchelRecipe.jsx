/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const MitchelRecipe = () => {
  const [data, setData] = useState();
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    localStorage.setItem("item", JSON.stringify("Tater Tot Casseroles"));
    toast("Added To Favorite");
    setIsFavorite(true);
  };
  console.log(data);
  useEffect(() => {
    fetch("http://localhost:5000/recipes/4")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          {data && (
            <img
              src={data.photo}
              className="card-img-top img-fluid rounded-2"
              alt="..."
            />
          )}
          <div className="card">
            <div className="card-body">
              {data && <h5 className="card-title">{data.name}</h5>}
              {data && <p className="card-text">{data.bio}</p>}
              {data && (
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Rating : {data.rating}</li>
                  <li className="list-group-item">{data.experience}</li>
                  <li className="list-group-item">
                    Menu Item :{data.numberOfRecipes}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <img
            src="../../../../public/assests/Wisconsin-Butter-Basted-Burgers_EXPS_THSUM18_205850_D02_02_5b-wo-beer.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Wisconsin Butter-Basted Burgers</h5>
              <p className="card-text">
                It’s no secret that Wisconsinites love their dairy—so much that
                they sometimes top their burgers with a generous pat of butter.
                My recipe is a lot like the butter burgers you’ll find in
                popular restaurants all over the state. —Becky Carver, North
                Royalton, Ohio —Becky Carver, North Royalton, Ohio
              </p>
              <ul>
                <div>
                  <h5>Ingredients</h5>
                  <div>
                    <li>1 pound lean ground beef (90% lean)</li>
                    <li>1/2 teaspoon seasoned salt</li>
                    <li>1/2 teaspoon pepper</li>
                    <li>1/2 pound fresh mushrooms</li>
                  </div>
                  <div>
                    <li>2 tablespoons plus 4 teaspoons butter, divided </li>
                    <li>4 hamburger buns, split</li>
                    <li>
                      Optional toppings: Tomato slices, lettuce leaves, dill
                      pickle slices, ketchup and mustard
                    </li>
                  </div>
                </div>
              </ul>
              <div>
                <h5>Directions</h5>
                <div>
                  <ol>
                    <li>
                      Sprinkle ground beef with seasoned salt and pepper. Pulse
                      mushrooms in a food processor until finely chopped. Add to
                      seasoned beef, mixing lightly but thoroughly. Shape into
                      four 1/2-in.-thick patties.
                    </li>
                    <li>
                      In a large skillet, heat 2 tablespoons butter over medium
                      heat. Add burgers; cook 6-8 minutes on each side, basting
                      with butter, until a thermometer reads 160°. Remove from
                      heat; keep warm. Add bun tops to skillet; toast until
                      golden brown.
                    </li>
                    <li>
                      Transfer burgers to bun bottoms. Top each with 1 teaspoon
                      butter. Replace bun tops. Serve with toppings.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleFavorite}
          style={{ width: "10rem", margin: "0 auto" }}
          className="btn btn-outline-danger"
          disabled={isFavorite}
        >
          Favorite
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MitchelRecipe;
