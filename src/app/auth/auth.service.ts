import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './auth/user.model';
import { Router } from '@angular/router';


export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthSevice {

  user = new BehaviorSubject<User>(null);

  private tokenExpitationTimer: any;

  constructor(private http: HttpClient, private router: Router) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZHj8bmZ2qOBD8gEPLc3wdgBeVQqberOo',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
        catchError(errorRes => this.handleError(errorRes)),
        tap(respDate => {
          this.handleAuthentication(
            respDate.email,
            respDate.localId,
            respDate.idToken,
            + respDate.expiresIn);
        })
      );
  }


  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZHj8bmZ2qOBD8gEPLc3wdgBeVQqberOo',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(catchError(errorResp => this.handleError(errorResp)),
        tap(respDate => {
          this.handleAuthentication(
            respDate.email,
            respDate.localId,
            respDate.idToken,
            + respDate.expiresIn);
        }));
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(
      new Date().getTime() + expiresIn * 1000);

    const user = new User(
      email,
      userId,
      token,
      expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));



  }
  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }
    const loadUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate));

    if (loadUser.token) {
      this.user.next(loadUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpitationTimer) {
      clearTimeout(this.tokenExpitationTimer);

    }
    this.tokenExpitationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpitationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);

  }


  private handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes);
    let errorMessage = 'An unknown error accurred.';

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already. ';
        break;

      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct ';
        break;


      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email was not found. ';
        break;



    }
    return throwError(errorMessage);



  }
}
