import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amoutInput', { static: false }) amoutInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {

    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmot = this.amoutInputRef.nativeElement.value;

    const ingredient = new Ingredient(ingName, ingAmot);
    this.ingredientAdded.emit(ingredient);
    
  }

  constructor() { }

  ngOnInit(): void {
  }


}
