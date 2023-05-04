/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AtlasRecipe = () => {
  const [data, setData] = useState();
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    localStorage.setItem("item", JSON.stringify("Tater Tot Casseroles"));
    toast("Added To Favorite");
    setIsFavorite(true);
  };
  console.log(data);
  useEffect(() => {
    fetch("http://localhost:5000/recipes/5")
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
            src="../../../../public/assests/Big-Buttery-Chocolate-Chip-Cookies_EXPS_THAM19_156150_C11_14_3b-40.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Big & Buttery Chocolate Chip Cookies
              </h5>
              <p className="card-text">
                Our version of the classic cookie is based on a recipe from a
                California bakery called Hungry Bear. The chocolate chip cookie
                is big, thick and chewy—perfect for dunking. —Irene Yeh, Mequon,
                Wisconsin
              </p>
              <ul>
                <div>
                  <h5>Ingredients</h5>
                  <div>
                    <li>1 cup butter, softened</li>
                    <li>1 cup packed brown sugar</li>
                    <li>3/4 cup sugar</li>
                    <li>1-1/2 teaspoons vanilla extract</li>
                    <li>2 large eggs, room temperature</li>
                  </div>
                  <div>
                    <li>2-2/3 cups all-purpose flour</li>
                    <li>1-1/4 teaspoons baking soda</li>
                    <li>1 teaspoon salt</li>
                  </div>
                </div>
              </ul>
              <div>
                <h5>Directions</h5>
                <div>
                  <ol>
                    <li>
                      In a large bowl, beat butter and sugars until blended.
                      Beat in eggs and vanilla. In a small bowl, whisk flour,
                      baking soda and salt; gradually beat into butter mixture.
                      Stir in chocolate chips and walnuts.
                    </li>
                    <li>
                      Shape 1/4 cupfuls of dough into balls. Flatten each to
                      3/4-in. thickness (2-1/2-in. diameter), smoothing edges as
                      necessary. Place in an airtight container, separating
                      layers with waxed paper or parchment; refrigerate,
                      covered, overnight.
                    </li>
                    <li>
                      To bake, place dough portions 2 in. apart on
                      parchment-lined baking sheets; let stand at room
                      temperature 30 minutes before baking. Preheat oven to
                      400°.
                    </li>
                    <li>
                      Bake until edges are golden brown (centers will be light),
                      10-12 minutes. Cool on pans 2 minutes. Remove to wire
                      racks to cool.
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

export default AtlasRecipe;
