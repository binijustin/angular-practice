import { Ingredient } from '../shared/ingredients.model';

export class Recipe {
    public name: string;
    public description: string;
    public imageUrl: string;
    public ingredients : Ingredient[];

    constructor(name: string, desc: string, imgUrl: string, ingredients : Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imageUrl = imgUrl;
        this.ingredients = ingredients;
    }
}