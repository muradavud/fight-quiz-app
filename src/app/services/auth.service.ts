import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpXsrfTokenExtractor } from '@angular/common/http'
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(
        private http : HttpClient,
        private cookie : CookieService) {}

    loginUrl = 'http://localhost:8080/login'

    login(form : FormData) {

        //let params = new HttpParams().append('username', login).append('password', password);
        let headers = new HttpHeaders().append("Cookie", "d");
        console.log(form);
        console.log(this.cookie.get('XSRF-TOKEN'));
        
        return this.http.post(this.loginUrl, form, {headers});
    }
}