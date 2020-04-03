import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

    recipeSelected= new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply', 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg'),
        new Recipe('onether Test Recipe', 'onether Test Recipe', 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }



}