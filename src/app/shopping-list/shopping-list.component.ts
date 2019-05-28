import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {

  private subscription : Subscription
 
  ingredients : Ingredient[];
  constructor(private slSrv:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slSrv.getIngredients();
    this.subscription = this.slSrv.ingredientsChanged.subscribe((ingredients : Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
