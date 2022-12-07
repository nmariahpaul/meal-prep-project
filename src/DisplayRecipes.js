import React from "react";
import "./DisplayRecipes.css";

export default function DisplayRecipes(props) {
  if (props.recipes) {
    return (
      <div className="DisplayRecipes">
        <h2>Showing recipes with "{props.keyword}"</h2>
        {props.recipes.map(function(recipes, index) {
          return (
            <div key={index}>
              <div className="row">
                <div className="col-6">
                  <h4>{recipes.title}</h4>
                </div>
                <div className="col-6">
                  <a
                    href={recipes.image}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={recipes.image}
                      alt={recipes.title}
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
