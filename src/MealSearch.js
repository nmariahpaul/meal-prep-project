import React, { useState } from "react";

import axios from "axios";
import "./MealSearch.css";
import DisplayRecipes from "./DisplayRecipes";

export default function MealSearch() {
  const [keyword, setKeyword] = useState("");
  const [recipes, setRecipes] = useState(null);

  function showRecipes(response) {
    setRecipes(response.data.results);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "aa295971ad814d7190621709ac68be0d";
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${keyword}`;

    axios.get(apiUrl).then(showRecipes);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="MealSearch">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Find your next meal"
          className="form-control"
          onChange={handleKeywordChange}
        />
        <input type="submit" value="Go" className="w-100" />
      </form>
      <DisplayRecipes recipes={recipes} keyword={keyword} />
    </div>
  );
}
