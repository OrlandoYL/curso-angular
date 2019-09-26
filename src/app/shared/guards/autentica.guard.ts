import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticaGuard implements CanActivate {
  constructor(private router:Router){
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      let token:string = localStorage.getItem("miToken")
      if (!token) {
        this.router.navigate(["/login"])
      }
    return true;
  }
  
}
