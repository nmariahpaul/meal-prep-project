import axios from "axios";
import React from "react";

export default function DisplayRecipesList(props) {
  function showRecipesInstructions(response) {
    console.log(response);
  }

  const apiKey = "a295971ad814d7190621709ac68be0d";

  const recipeUrl = `https://api.spoonacular.com/recipes/${props.recipesId}/analyzedInstructions?apiKey=${apiKey}`;
  axios.get(recipeUrl).then(showRecipesInstructions);

  return (
    <div className="DisplayRecipesList">
      <div className="row">
        <div className="col-6">
          <h4>{props.recipes.title}</h4>
        </div>
        <div className="col-6">
          <a
            href={props.recipes.image}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={props.recipes.image}
              alt={props.recipes.title}
              className="img-fluid"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
