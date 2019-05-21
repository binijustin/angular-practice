import { Recipe } from './recipe.model';
import { Output, EventEmitter } from '@angular/core';

export class RecipeService {
    @Output() selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Sample Recipe', 'This is a sample recipe', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'),
        new Recipe('Another Sample Recipe', 'This is another sample recipe', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg')
    ]

    getRecipes() {
        return this.recipes.slice();
    }

    setSelectedRecipe(recipe:Recipe){
        this.selectedRecipe.emit(recipe);
    }

}