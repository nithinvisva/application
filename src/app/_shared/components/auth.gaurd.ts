import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from "@angular/router";
import { AuthServiceService } from "../services/auth-service.service";
import { map, catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
  
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthServiceService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): any | Promise<boolean> {
            return this.authService.getAuthStatus().pipe(map((res)=>{
                if(!res.isloggedIn){
                    this.router.navigate(['/login']);
                    return false
                }
                return true
            }),
            catchError((err) =>{
                this.router.navigate(['/login']);
                return of(true)
            }
        ))
    }
}