/* eslint-disable no-unused-vars */
import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <div>
        <h2 className="title">Discover Menu</h2>
        <hr />
        <h4 className="subtitle my-4">CHOOSE AND TRY</h4>
      </div>
      <div className="grid">
        <div>
          <div>
            <div>
              <div className="items border1">
                <div>
                  <h4>Star-Studded Blueberry Pie</h4>
                  <p>
                    Family and friends say this patriotic pie is better than a
                    local favorite from one of our best neighborhood
                    restaurants. Sometimes, I switch things up and use
                    gooseberries for half of the blueberries. —Nancy Barker,
                    Silverton, Oregon
                  </p>
                  <Link to="/recipes">
                    <button className="btn btn-danger">See recipe</button>
                  </Link>
                </div>
                <div>
                  <h4>$36</h4>
                </div>
              </div>
            </div>
            <div>
              <div className="items border2">
                <div>
                  <h4>Texas-Style Beef Brisket</h4>
                  <p>
                    A friend had success with this recipe, so I tried it. When
                    my husband told me how much he loved it, I knew I’d be
                    making it often.—Vivian Warner, Elkhart, Kansas
                  </p>
                  <button className="btn btn-danger">See recipe</button>
                </div>
                <div>
                  <h4>$136</h4>
                </div>
              </div>
            </div>
            <div>
              <div className="items border3">
                <div>
                  <h4>All-American Banana Split</h4>
                  <p>
                    In 1904, the first banana split recipe was made here in
                    Latrobe, Pennsylvania by David Strickler, an apprentice
                    pharmacist at a local drug store. We still use his original
                    formula when we make banana splits in our restaurants.
                    —Melissa Blystone, Valley Dairy
                  </p>
                  <button className="btn btn-danger">See recipe</button>
                </div>
                <div>
                  <h4>$80</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="items">
            <div>
              <h4>Wisconsin Butter-Basted Burgers</h4>
              <p>
                It’s no secret that Wisconsinites love their dairy—so much that
                they sometimes top their burgers with a generous pat of butter.
                My recipe is a lot like the butter burgers you’ll find in
                popular restaurants all over the state. —Becky Carver, North
                Royalton, Ohio —Becky Carver, North Royalton, Ohio
              </p>
              <button className="btn btn-danger">See recipe</button>
            </div>
            <div>
              <h4>$60</h4>
            </div>
          </div>
          <div className="items">
            <div>
              <h4>Big & Buttery Chocolate Chip Cookies</h4>
              <p>
                Our version of the classic cookie is based on a recipe from a
                California bakery called Hungry Bear. The chocolate chip cookie
                is big, thick and chewy—perfect for dunking. —Irene Yeh, Mequon,
                Wisconsin
              </p>
              <button className="btn btn-danger">See recipe</button>
            </div>
            <div>
              <h4>$30</h4>
            </div>
          </div>
          <div className="items">
            <div>
              <h4>Tater Tot Casseroles</h4>
              <p>
                Ground beef, sausage and cheese make this tater tot casserole
                with green beans a crowd-pleaser. Cayenne pepper and hot Italian
                sausage give it a pleasant kick. —Ryan Jones, Chillicothe,
                Illinois
              </p>
              <button className="btn btn-danger">See recipe</button>
            </div>
            <div>
              <h4>$100</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
