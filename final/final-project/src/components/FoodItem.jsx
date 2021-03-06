import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Home from "../pages/Home";
import env from "react-dotenv";

const FoodItem = () => {
  const [nutrients, setNutrients] = useState("");
  const { id } = useParams();

  const getNutrients = async () => {
    if (!env.APP_ID || !env.APP_KEY) {
      <Link to="/">
        <Home />
      </Link>;
    }
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${env.APP_ID}&app_key=${env.APP_KEY}`
    );
    const nutrientsResponse = await response.json();
    setNutrients(nutrientsResponse);
  };

  useEffect(() => {
    getNutrients();
  }, []);

  return (
    <div>
      {nutrients && (
        <div className="food-container">
          <h3 className="food-title">{nutrients.recipe.label}</h3>
          <div className="food-img-details-container">
            <div>
              <img
                className="food-img"
                src={nutrients.recipe.image}
                alt="name"
              ></img>
              <h5 className="sub-title">
                Cuisine type : {nutrients.recipe.cuisineType}
              </h5>
              <h5 className="sub-title">
                Meal type : {nutrients.recipe.mealType}
              </h5>
              <h5 className="sub-title">
                Serving quantity : {nutrients.recipe.totalWeight.toFixed(2)}{" "}
                grams
              </h5>
            </div>
            <div className="food-sub-container">
              <h4 className="sub-title">Nutrition Facts</h4>
              {Object.keys(nutrients.recipe.totalNutrients).map(
                (keyName, i) => (
                  <li key={i}>
                    <span className="food-nutrition-span-main">
                      <span className="food-nutrition-span-label">
                        {nutrients.recipe.totalNutrients[keyName].label}
                        {":"}
                      </span>
                      <span className="food-nutrition-span-qty">
                        {nutrients.recipe.totalNutrients[
                          keyName
                        ].quantity.toFixed(2)}
                        {nutrients.recipe.totalNutrients[keyName].unit}
                      </span>
                    </span>
                  </li>
                )
              )}
            </div>
            <div className="food-sub-container">
              <h4 className="sub-title">Daily Value</h4>
              {Object.keys(nutrients.recipe.totalDaily).map((keyName, i) => (
                <li key={i}>
                  <span className="food-nutrition-span-main">
                    <span className="food-nutrition-span-label">
                      {nutrients.recipe.totalDaily[keyName].label}
                      {" : "}
                    </span>
                    <span className="food-nutrition-span-qty">
                      {nutrients.recipe.totalDaily[keyName].quantity.toFixed(2)}
                      {nutrients.recipe.totalDaily[keyName].unit}
                    </span>
                  </span>
                </li>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodItem;
