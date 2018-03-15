import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes = [
    new Recipe('Bob', 'This is BoB test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Leshta', 'This is simply a leshta test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() {

   }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeWasSelected.emit(recipe);
  }

}
