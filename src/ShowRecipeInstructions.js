import React from "react";

export default function ShowRecipeInstructions(props) {
  if (props.recipeInstructions) {
    return (
      <div className="ShowRecipeInstructions">
        {props.recipeInstructions.map(function (recipeInstructions, index) {
          return (
            <ul key={index}>
              <li>{recipeInstructions}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}
