import { Recipe } from './../recipe.model';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is very good recipe', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe2', 'This is very good recipe 2', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
 
    ];
    
  constructor(){}
  onSelectRecipe(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
