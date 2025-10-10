import React, { useState } from "react";
import "./RecipeForm.css";

function RecipeForm({ addRecipe }) {
	const [title, setTitle] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [instructions, setInstructions] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!title.trim() || !ingredients.trim() || !instructions.trim()) return;

		const newRecipe = {
			id: Date.now(),
			title,
			ingredients,
			instructions,
		};

		addRecipe(newRecipe);
		setTitle("");
		setIngredients("");
		setInstructions("");
	};

	return (
		<form className="recipe-form" onSubmit={handleSubmit}>
			<h2>Add a New Recipe</h2>
			<input
				type="text"
				placeholder="Recipe Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				placeholder="Ingredients (comma-separated)"
				value={ingredients}
				onChange={(e) => setIngredients(e.target.value)}
			/>
			<textarea
				placeholder="Instructions"
				value={instructions}
				onChange={(e) => setInstructions(e.target.value)}
			/>
			<button type="submit">Add Recipe</button>
		</form>
	);
}

export default RecipeForm;
