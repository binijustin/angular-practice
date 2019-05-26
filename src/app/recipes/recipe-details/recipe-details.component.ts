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
  constructor(private recipeSrv : RecipeService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    try{
      this.recipe = this.recipeSrv.getRecipe(+this.route.snapshot.params['id'])

      this.route.params.subscribe((params:Params)=>{
        this.recipe = this.recipeSrv.getRecipe(+params['id'])
      })
    }catch(exception){
      console.log("catched")
      this.router.navigate(["/recipes"]);
    }
    
  }

  

  onAddIngredients(){
    this.recipeSrv.addIngredientsToShoppingList(this.recipe.ingredients);
  }





}
