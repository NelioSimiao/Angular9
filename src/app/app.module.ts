import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RecipesModule } from './recipes/recipes-module';

import { AppComponent } from './app.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { AuthInerceptorService } from './auth/auth/auth-interceptor.service';
import { ShoppingListModule } from './shopping-list/shopping-list-module';
import { SharedModule } from './shared/shared-module';
import { AuthModule } from './auth/auth/auth-module';


@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    // RecipesModule,
    // ShoppingListModule,
    SharedModule,
    AuthModule

  ],
  providers: [ShoppingListService, RecipeService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInerceptorService,
    multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
