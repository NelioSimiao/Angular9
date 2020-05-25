import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { NgModule } from '@angular/core';
import {RecipesRoutingModule} from './recipes-route-module';
import {SharedModule} from '../shared/shared-module';

@NgModule({
  declarations:
    [
      RecipesComponent,
      RecipesListComponent,
      RecipesDetailComponent,
      RecipesItemComponent,
      RecipeStartComponent,
      RecipeEditComponent,

    ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ],
  exports: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    RecipeStartComponent,
    RecipeEditComponent

  ]
})
export class RecipesModule {

}
