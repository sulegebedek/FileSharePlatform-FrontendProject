import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private toastrService: ToastrService, private router: Router)
  { this.getClaim(); }
  
  role: string;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated()) {
      if (this.role == "Admin") {
        return true;
      }
      else {
        this.router.navigate(["file"]);
        this.toastrService.error("You aren't authorized to do this");
        return false;
      }
    }
    else {
      this.router.navigate(["login"]);
      this.toastrService.error("You must login to continue");
      return false;
    }
    
  }

  getClaim() {
    this.role = this.authService.getUserRoles();
  }
}
  

