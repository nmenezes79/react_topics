import { useState } from "react";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };
  return (
    <div className="app-container">
      <h1>🍽️ Bob's Recipe Sharing App</h1>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
