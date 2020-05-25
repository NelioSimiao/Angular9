import { DropdownDirective } from './dropdown.directive';
import { NgModule } from '@angular/core';
import { LoadingSpannerComponent } from '../shared/loading-spinner/loading-spanner/loading-spanner.component';
import { AlertComponent } from '../shared/alert/alert.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoadingSpannerComponent,
    AlertComponent,
    DropdownDirective,
  ],
  imports: [CommonModule],

  exports: [
    LoadingSpannerComponent,
    AlertComponent,
    DropdownDirective,
    CommonModule
  ]
})
export class SharedModule { }
