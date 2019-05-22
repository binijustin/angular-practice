import { Ingredient } from '../shared/ingredients.model';
import { TouchSequence } from 'selenium-webdriver';
import { Output, EventEmitter } from '@angular/core';

export class ShoppingListService {
    @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];


    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        console.log(this.ingredients)
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    
}