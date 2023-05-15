import { Recipe } from './../recipe.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is very good recipe', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe2', 'This is very good recipe', 
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
 
    ];
    
  constructor(){console.log(this.recipes);}
}
