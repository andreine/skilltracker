import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let canActivateRoute = false;
    this.auth.currentUserData.subscribe(x => {
        let permission = x.permissions;

        if(permission === route.data["permission"]){
          canActivateRoute =  true;
        }else{
          if(x.email){
            this.router.navigate(['home']);
            this.toastr.error("you cannot acces this", "DASDASDAS");
          }else{
            this.router.navigate(['account/login']);
          }
          canActivateRoute = false;
        }
    })

    return canActivateRoute;
  }
}
