import { AuthSevice } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthSevice) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ngangularrecipes.firebaseio.com/recipes.json', recipes)
      .subscribe(
        response => {
          console.log(response);
        }
      );

  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(
      'https://ngangularrecipes.firebaseio.com/recipes.json'

    ).pipe(
      map(recipes => {
        return recipes.map(recipe => {
          console.log(recipe);
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
        });
      }),

      tap(
        recipes => {
          this.recipeService.setRecipes(recipes);
          // console.log(recipes);
        }
      ));

  }
}
