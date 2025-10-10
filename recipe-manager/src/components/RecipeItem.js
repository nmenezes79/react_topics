import "./RecipeItem.css";

function RecipeItem({ recipe }) {
	return (
		<div className="recipe-item">
			<h3>{recipe.title}</h3>
			<p><strong>Ingredients:</strong> {recipe.ingredients}</p>
			<p><strong>Instructions:</strong> {recipe.instructions}</p>
		</div>
	);
}

export default RecipeItem;
