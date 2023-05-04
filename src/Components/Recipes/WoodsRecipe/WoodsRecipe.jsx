/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const WoodsRecipe = () => {
  const [data, setData] = useState();
  console.log(data);
  useEffect(() => {
    fetch("http://localhost:5000/recipes/3")
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
            src="../../../../public/assests/All-American-Banana-Split_EXPS_FT20_37953_F_0716_1-14.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">All-American Banana Split</h5>
              <p className="card-text">
                In 1904, the first banana split recipe was made here in Latrobe,
                Pennsylvania by David Strickler, an apprentice pharmacist at a
                local drug store. We still use his original formula when we make
                banana splits in our restaurants. —Melissa Blystone, Valley
                Dairy
              </p>
              <ul>
                <div>
                  <h5>Ingredients</h5>
                  <div>
                    <li>1 medium banana, peeled and split lengthwise</li>
                    <li>
                      1 scoop each vanilla, chocolate and strawberry ice cream
                    </li>
                    <li>
                      2 tablespoons sliced fresh strawberries or 1 tablespoon
                      strawberry ice cream topping
                    </li>
                    <li>
                      2 tablespoons pineapple chunks or 1 tablespoon pineapple
                      ice cream topping
                    </li>
                  </div>
                  <div>
                    <li>2 tablespoons whipped cream</li>
                    <li>1 tablespoon chopped peanuts</li>
                    <li>1 tablespoon chocolate syrup</li>
                    <li>2 maraschino cherries with stems</li>
                  </div>
                </div>
              </ul>
              <div>
                <h5>Directions</h5>
                <div>
                  <ol>
                    <li>
                      Place banana in a dessert dish; place scoops of ice cream
                      between banana. Top with remaining ingredients. Serve
                      immediately.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WoodsRecipe;
