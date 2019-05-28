import { Recipe } from './recipe.model';
import {Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    constructor(private slSrv : ShoppingListService){};

    private recipes: Recipe[] = [
        new Recipe(
            'Carbonara',
            'Pasta in white sauce',
            'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1001491_11.jpg',
            [
                new Ingredient("Pasta", 1),
                new Ingredient("Cheese", 1),
                new Ingredient("Bacon", 10)
            ]),
        new Recipe(
            'Eggs Benedict',
            'Perfect meal for breakfast',
            'https://shewearsmanyhats.com/wp-content/uploads/2015/04/eggs-benedict-1-480x270.jpg',
            [
                new Ingredient("Toast", 2),
                new Ingredient("Eggs", 2),
                new Ingredient("Butter", 1),
                new Ingredient("Ham", 2)

            ])
    ]

    getRecipes() {
        return this.recipes.slice();
    }

   getRecipe(index: number) {
       return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slSrv.addIngredients(ingredients);
    }

    


}