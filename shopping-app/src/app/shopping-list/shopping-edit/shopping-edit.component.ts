import { Ingredient } from './../../shared/ingredient-model';
import { EventEmitter, Output } from '@angular/core';
import { Component, ElementRef , ViewChild} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
 @ViewChild('InputName') nameInputRef : ElementRef;
 @ViewChild('InputAmount') amountInputRef : ElementRef;
 @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddIngredient(){
    const inpName = this.nameInputRef.nativeElement.value;
    const inpAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(inpName, inpAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
