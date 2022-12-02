import React, { useState } from "react";
import "./MealSearch.css";

export default function MealSearch() {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
    </div>
  );
}
