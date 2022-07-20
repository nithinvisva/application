import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from "@angular/router";
import { AuthServiceService } from "../services/auth-service.service";
  
@Injectable()
export class LoginGuard implements CanActivate {
    constructor(
        private authService: AuthServiceService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        const isAuthenticated = this.authService.getAuthStatus();
        if (isAuthenticated) {
            this.router.navigate(['/home']);
        }
        return !isAuthenticated;
    }
}