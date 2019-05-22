import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput : ElementRef; 
  @ViewChild('amountInput') amountInput : ElementRef;
  constructor(private slSrv: ShoppingListService) { }

  ngOnInit() {

  }

  onAddItem(event: Event) {
    event.preventDefault();
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngrd = new Ingredient(ingName,ingAmount);
    this.slSrv.addIngredient(newIngrd);
  }

}
