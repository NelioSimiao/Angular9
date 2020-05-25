import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingListRouteModule } from '../shopping-list/shopping-list-route-module';
import { SharedModule } from '../shared/shared-module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations:
    [
      ShoppingListComponent,
      ShoppingEditComponent,
    ],
  imports: [
    RouterModule,
    FormsModule,
    ShoppingListRouteModule,
    SharedModule
  ]
}) export class ShoppingListModule { }
