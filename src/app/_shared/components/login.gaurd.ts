import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from "@angular/router";
import { AuthServiceService } from "../services/auth-service.service";
import { map, catchError} from 'rxjs/operators';
import { of } from 'rxjs';
  
@Injectable()
export class LoginGuard implements CanActivate {
    constructor(
        private authService: AuthServiceService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): any | Promise<boolean> {
        return this.authService.getAuthStatus().pipe(map((res)=>{
            if(res.isloggedIn){
                this.router.navigate(['/home']);
                    return false;
            }
            return true
        }),
        catchError((err) =>{
            return of(true)
        }
        ))
    }
}
