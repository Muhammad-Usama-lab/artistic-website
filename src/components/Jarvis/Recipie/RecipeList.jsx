"use-client";
import RecipeListItem from "./RecipeListItem";
export default function RecipeList({ recipeData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2   p-4 ">
      {recipeData.map((item, index) => {
        return <RecipeListItem key={index} data={item} />;
      })}
    </div>
  );
}
