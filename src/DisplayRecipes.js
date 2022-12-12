import React from "react";
import DisplayRecipesList from "./DisplayRecipesList";
import "./DisplayRecipes.css";

export default function DisplayRecipes(props) {
  if (props.recipes) {
    return (
      <div className="DisplayRecipes">
        <h2>Showing recipes with "{props.keyword}"</h2>
        {props.recipes.map(function (recipes, index) {
          console.log(recipes.id);
          return (
            <div key={index}>
              <DisplayRecipesList recipes={recipes} recipesId={recipes.id} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
