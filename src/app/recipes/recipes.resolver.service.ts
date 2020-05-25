import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<Recipe[]> {

  constructor(
    private dataStoregeService: DataStorageService,
    private recepeService: RecipeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const recipes = this.recepeService.getRecipes();
    if (recipes.length === 0) {
      return this.dataStoregeService.fetchRecipes();
    } else {

      return recipes;
    }
  }


}
