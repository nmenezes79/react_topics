import RecipeItem from "./RecipeItem";
import "./RecipeList.css";

function RecipeList({ recipes }) {
	if (recipes.length === 0) {
		return <p className="no-recipes">No recipes added yet. Start sharing!</p>;
	}

	return (
		<div className="recipe-list">
			{recipes.map((recipe) => (
				<RecipeItem key={recipe.id} recipe={recipe} />
			))}
		</div>
	);
}

export default RecipeList;
