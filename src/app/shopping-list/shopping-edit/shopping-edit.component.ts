import { Subscription } from 'rxjs';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  //  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;  pattern="^[1-9]+[0-9]*$"
  @ViewChild('f', { static: false }) shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editModeIdex: number;
  editItem: Ingredient;
  constructor(private slService: ShoppingListService) { }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newingredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.slService.updateIngredient(this.editModeIdex, newingredient);
    } else {
      this.slService.addIngredient(newingredient);
    }
    this.editMode = false;
    this.shoppingListForm.reset();
  }


  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editModeIdex = index;
        this.editMode = true;
        this.editItem = this.slService.getIngredient(index);

        this.shoppingListForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });

      }
    );
  }

  onClear() {
    this.editMode = false;
    this.shoppingListForm.reset();

  }
  onDelete() {
    this.slService.onDelete(this.editModeIdex);
    this.onClear();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
