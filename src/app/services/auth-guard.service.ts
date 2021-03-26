import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { QuizService } from './quiz.service';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {

    constructor(
        private quiz: QuizService,
        private router: Router
        ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.quiz.isActive) {
            this.router.navigate(['home']);
            return false;
        }
        else
            return true;
    }

}