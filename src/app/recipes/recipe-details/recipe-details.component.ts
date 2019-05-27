import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe = null;
  index: number;
  constructor(private recipeSrv: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    try {
      this.index = +this.route.snapshot.params['id'];
      this.recipe = this.recipeSrv.getRecipe(this.index)

      this.route.params.subscribe((params: Params) => {
        this.index = +params['id'];
        this.recipe = this.recipeSrv.getRecipe(this.index)
      })
    } catch (exception) {
      console.log("catched")
      this.router.navigate(["/recipes"]);
    }

  }



  onAddIngredients() {
    this.recipeSrv.addIngredientsToShoppingList(this.recipe.ingredients);
  }





}
