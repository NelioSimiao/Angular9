import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: 'auth', component: AuthComponent }]),
    FormsModule]
})
export class AuthModule { }
