import { UserService } from 'src/app/services/users.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private userService: UserService,
              private router: Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigateByUrl('');
      return false;
    }
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean>  | Promise<boolean> | boolean {
    // Si el usuario existe puede ingresar
    if(localStorage.getItem('token')){
        return true;
    } else {
      this.router.navigateByUrl('');
      return false;
    }
  }
}



