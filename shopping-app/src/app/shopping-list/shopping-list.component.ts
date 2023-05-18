import { Ingredient } from './../shared/ingredient-model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
ingredients : Ingredient[] = [
  new Ingredient('Apple',10),
  new Ingredient('Banana',5),
  new Ingredient('Dragon',20),
];
onItemAdded(ingredient : Ingredient){
  this.ingredients.push(ingredient);
}
}
