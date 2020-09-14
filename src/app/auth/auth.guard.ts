import { UserserviceService } from './../service/userservice.service';
import { Router } from '@angular/router'
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private userservice : UserserviceService, private router : Router) {}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      if(!this.userservice.isLoggedIn()) {
        this.router.navigateByUrl('/login');
        this.userservice.deleteToken();
        return false;
      }
    return true;
  }
  
}