/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const ShopieRecipe = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/recipes/2")
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
            src="../../../../public/assests/Texas-Style-Beef-Brisket.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Texas-Style Beef Brisket</h5>
              <p className="card-text">
                A friend had success with this recipe, so I tried it. When my
                husband told me how much he loved it, I knew I’d be making it
                often.—Vivian Warner, Elkhart, Kansas
              </p>
              <ul>
                <div>
                  <h5>Ingredients</h5>
                  <div>
                    <li>3 tablespoons Worcestershire sauce</li>
                    <li>1 tablespoon chili powder</li>
                    <li>2 garlic cloves, minced</li>
                    <li>1 teaspoon celery salt</li>
                    <li>1 teaspoon pepper</li>
                    <li>1 teaspoon liquid smoke, optional</li>
                    <li>1 fresh beef brisket (6 pounds)</li>
                    <li>1/2 cup beef broth</li>
                    <li>2 bay leaves</li>
                  </div>
                  <div>
                    <li>1 medium onion, chopped</li>
                    <li>2 tablespoons canola oil</li>
                    <li>2 garlic cloves, minced</li>
                    <li>1 cup ketchup</li>
                    <li>1/2 cup molasses</li>
                    <li>1/4 cup cider vinegar</li>
                    <li>2 teaspoons chili powder</li>
                    <li>1/2 teaspoon ground mustard</li>
                  </div>
                </div>
              </ul>
              <div>
                <h5>Directions</h5>
                <div>
                  <ol>
                    <li>
                      In a large bowl or shallow dish, combine the
                      Worcestershire sauce, chili powder, garlic, celery salt,
                      pepper and, if desired, liquid smoke. Cut brisket in half;
                      add to bowl and turn to coat. Cover and refrigerate
                      overnight.
                    </li>
                    <li>
                      Transfer beef to a 5- or 6-qt. slow cooker; add broth and
                      bay leaves. Cover and cook on low for 6-8 hours or until
                      meat is tender.
                    </li>
                    <li>
                      For sauce, in a small saucepan, saute onion in oil until
                      tender. Add garlic; cook 1 minute longer. Stir in the
                      remaining ingredients; heat through.
                    </li>
                    <li>
                      Remove brisket from the slow cooker; discard bay leaves.
                      Place 1 cup cooking juices in a measuring cup; skim fat.
                      Add to the barbecue sauce. Discard remaining juices.
                    </li>
                    <li>
                      Return brisket to the slow cooker; top with sauce mixture.
                      Cover and cook on high for 30 minutes to allow flavors to
                      blend. Thinly slice beef across the grain; serve with
                      sauce.
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

export default ShopieRecipe;
