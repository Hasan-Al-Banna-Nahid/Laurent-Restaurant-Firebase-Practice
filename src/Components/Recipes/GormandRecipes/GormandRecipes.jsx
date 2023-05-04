/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const GormandRecipes = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    localStorage.setItem("item", JSON.stringify("Tater Tot Casseroles"));
    toast("Added To Favorite");
    setIsFavorite(true);
  };
  const [data, setData] = useState();
  console.log(data);
  useEffect(() => {
    fetch("https://serverside-iamnahid591998-gmailcom.vercel.app/recipes/6")
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
            src="../../../../public/assests/Tater-Tot-Casseroles_EXPS_FT20_80833_F_0227_1-2.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tater Tot Casseroles</h5>
              <p className="card-text">
                Ground beef, sausage and cheese make this tater tot casserole
                with green beans a crowd-pleaser. Cayenne pepper and hot Italian
                sausage give it a pleasant kick. —Ryan Jones, Chillicothe,
                Illinois
              </p>
              <ul>
                <div>
                  <h5>Ingredients</h5>
                  <div>
                    <li>3/4 pound bulk hot Italian sausage</li>
                    <li>3/4 pound lean ground beef (90% lean)</li>
                    <li>1 small onion, chopped</li>
                    <li>
                      2 cans (10-1/2 ounces each) condensed cream of celery
                      soup, undiluted
                    </li>
                  </div>
                  <div>
                    <li>2 cups frozen cut green beans, thawed</li>
                    <li>1 can (15-1/4 ounces) whole kernel corn, drained</li>
                    <li>2 cups shredded Colby-Monterey Jack cheese, divided</li>
                  </div>
                </div>
              </ul>
              <div>
                <h5>Directions</h5>
                <div>
                  <ol>
                    <li>
                      In a Dutch oven, cook the sausage, beef and onion over
                      medium heat until meat is no longer pink; drain. Add the
                      soup, beans, corn, 1 cup cheese, milk, garlic powder,
                      seasoned salt and cayenne. Transfer to 2 greased 11x7-in.
                      baking dishes. Top with Tater Tots; sprinkle with
                      remaining 1 cup cheese.
                    </li>
                    <li>
                      Cover and freeze 1 casserole for up to 3 months. Cover and
                      bake the remaining casserole at 350° for 40 minutes.
                      Uncover and bake until bubbly, 5-10 minutes longer.
                    </li>
                    <li>
                      To use frozen casserole: Thaw in the refrigerator
                      overnight. Remove from the refrigerator 30 minutes before
                      baking.
                    </li>
                    <li>
                      Cover and bake at 350° for 50 minutes. Uncover and bake
                      until bubbly, 5-10 minutes longer.
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

export default GormandRecipes;
