import { AuthSevice, AuthResponseData } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthSevice, private router: Router) { }

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  onSwithMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let autObs: Observable<AuthResponseData>;
    this.isLoading = true;

    if (this.isLoginMode) {
      autObs = this.authService.login(email, password);

    } else {
      autObs = this.authService.signup(email, password);
    }
    autObs.subscribe(respData => {
      this.isLoading = false;
      this.router.navigate(['/recipes']);

    }, errorMessage => {
      this.error = errorMessage;
      this.isLoading = false;

    });

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  ngOnInit(): void {
  }

}
