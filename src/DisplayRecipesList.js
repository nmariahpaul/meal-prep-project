import axios from "axios";
import React, { useState } from "react";
import ShowRecipeInstructions from "./ShowRecipeInstructions";

export default function DisplayRecipesList(props) {
  const [recipeInstructions, setRecipeInstructions] = useState(null);

  function showRecipesInstructions(response) {
    console.log(response.data[0].steps);
    setRecipeInstructions(response.data[0].steps);
    return <ShowRecipeInstructions recipeInstructions={recipeInstructions} />;
  }

  const apiKey = "aa295971ad814d7190621709ac68be0d";
  const recipeUrl = `https://api.spoonacular.com/recipes/${props.recipesId}/analyzedInstructions?apiKey=${apiKey}`;
  axios
    .get(recipeUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
    .then(showRecipesInstructions);

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
