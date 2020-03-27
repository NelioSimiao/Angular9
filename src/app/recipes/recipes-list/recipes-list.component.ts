import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply', 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg'),
    new Recipe('onether Test Recipe', 'onether Test Recipe', 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
