import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.user$.pipe(
      map((user) => {
        if (state.url === '/') {
          if (user) {
            return this.router.createUrlTree(['/dashboard/customers']);
          }

          return true;
        }

        if (user) {
          return true;
        }

        return this.router.createUrlTree(['/']);
      }),
      take(1)
    );
  }

  constructor(private router: Router, private authService: AuthService) {}
}
