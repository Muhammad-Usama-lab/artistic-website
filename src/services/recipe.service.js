import { ART_LIVE_AXIOS_INSTANCE } from "../config/axios";

export const RecipeService = {
  getRecipes,
  getRecipesTitle,
};

function getRecipes(recipeId) {
  try {
    return ART_LIVE_AXIOS_INSTANCE.get(
      `ords/art/jarvis/data/recipe/?recipe_id=${recipeId}`
    );
  } catch (error) {
    return Promise.reject(error);
  }
}

function getRecipesTitle(recipeId) {
  try {
    return ART_LIVE_AXIOS_INSTANCE.get(
      `/ords/art/jarvis/data/recipe_wash?recipe_id=${recipeId}`
    );
  } catch (error) {
    return Promise.reject(error);
  }
}
