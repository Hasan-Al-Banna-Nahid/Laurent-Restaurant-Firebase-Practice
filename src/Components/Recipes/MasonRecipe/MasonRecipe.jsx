/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const MasonRecipe = () => {
  const [data, setData] = useState();
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    localStorage.setItem("item", JSON.stringify("Tater Tot Casseroles"));
    toast("Added To Favorite");
    setIsFavorite(true);
  };
  console.log(data);
  useEffect(() => {
    fetch("https://serverside-iamnahid591998-gmailcom.vercel.app/recipes/1")
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
            src="../../../../public/assests/berrypie.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Star-Studded Blueberry Pie</h5>
              <p className="card-text">
                Family and friends say this patriotic pie is better than a local
                favorite from one of our best neighborhood restaurants.
                Sometimes, I switch things up and use gooseberries for half of
                the blueberries. —Nancy Barker, Silverton, Oregon
              </p>
              <ul>
                <div>
                  <h5>Ingredients</h5>
                  <div>
                    <li>Pastry for double-crust pie (9 inches)</li>
                    <li>4 cups fresh or frozen blueberries</li>
                    <li>1 cup sugar</li>
                    <li>1/4 cup quick-cooking tapioca</li>
                  </div>
                  <div>
                    <li>1 tablespoon lemon juice</li>
                    <li>1/4 teaspoon salt</li>
                    <li>
                      1 tablespoon lemon juice 1/4 teaspoon salt 2 tablespoons
                      butter
                    </li>
                  </div>
                </div>
              </ul>
              <div>
                <h5>Directions</h5>
                <div>
                  <ol>
                    <li>
                      On a lightly floured surface, roll one half of pie dough
                      to a 1/8-in.-thick circle; transfer to a 9-in. pie plate.
                      Trim pastry even with rim; flute edge. Refrigerate 30
                      minutes. Leave remaining pie dough refrigerated.
                    </li>
                    <li>
                      Preheat oven to 400°. Combine blueberries, sugar, tapioca,
                      lemon juice and salt; toss gently. Let stand for 15
                      minutes.
                    </li>
                    <li>
                      Add filling to pie pastry; dot with butter. Bake 20
                      minutes on a lower oven rack. Reduce heat to 350°; bake 10
                      minutes more. Cover edges loosely with foil to prevent
                      burning. Return to lower rack of oven; bake 15-20 minutes
                      longer, until blueberries are bubbly and beginning to
                      burst. Cool on a wire rack
                    </li>
                    <li>
                      Roll remaining dough to a 1/8-in.-thick circle. Cut out
                      stars using different-sized cookie cutters as desired.
                      Place on an ungreased baking sheet. Bake at 350° until
                      golden brown, 5-10 minutes. Remove to wire racks to cool.
                      Place stars over cooled pie in any pattern desired.
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

export default MasonRecipe;
