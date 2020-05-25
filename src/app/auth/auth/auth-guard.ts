import { AuthSevice } from './../auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { map,take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthSevice, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.user.pipe((take(1)),
      map(user => {
        const isThereUser = user ? true : false;

        if (isThereUser) {
          return true;
        }
        return this.router.createUrlTree((['/auth']));
        // return !user ? false : true;
      }));
  }
}
