import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    private $auth: any;
    constructor(
        private router: Router,
        private authService: AuthService
    ) {
        this.$auth = this.authService.$auth();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        if (this.$auth.session.is_authenticated()) {
            // logged in so return true
            return true;
        } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], {});
            return false;
        }
    }
}
