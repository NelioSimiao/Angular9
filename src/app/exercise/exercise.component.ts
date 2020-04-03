import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  numbers = [1, 2, 3];

  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4, 6];
  constructor() { }

  onlyOdd = false;

  ngOnInit(): void {
  }

}
