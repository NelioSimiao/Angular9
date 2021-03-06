import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipeChanged = new Subject<Recipe[]>();
  /*  private recipes: Recipe[] = [
     new Recipe('A Test Recipe',
       'This is simply',
       'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
       [
         new Ingredient('Meat', 1),
         new Ingredient('French Fries', 20)
       ]),

     new Recipe('onether Test Recipe',
       'onether Test Recipe',
       'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
       [
         new Ingredient('Buns', 2),
         new Ingredient('Meat', 1)
       ])
   ];
 */
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());

  }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  onDeleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());

    console.log(this.recipes);
  }

}
