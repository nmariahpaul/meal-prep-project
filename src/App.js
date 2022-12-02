import React from "react";
import "./App.css";
import MealSearch from "./MealSearch";
import "./MealPlanHomepage";
import MealPlanHomepage from "./MealPlanHomepage";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <MealPlanHomepage />
          <MealSearch />
        </main>
        <footer className="app-footer">
          This project is{" "}
          <a
            href="https://github.com/nmariahpaul/meal-prep-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>{" "}
          and coded by{" "}
          <a
            href="https://www.linkedin.com/in/mariah-paul/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mariah Paul
          </a>
        </footer>
      </div>
    </div>
  );
}
