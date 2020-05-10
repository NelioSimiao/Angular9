import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  constructor(
    private recipesService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.recipesService.recipeChanged.subscribe((recipesChanged: Recipe[]) => {
      this.recipes = recipesChanged;
    });
    this.recipes = this.recipesService.getRecipes();
  }

  newRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
