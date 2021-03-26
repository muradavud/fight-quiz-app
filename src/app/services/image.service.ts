import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Question } from '../models/question.model';

@Injectable({providedIn: 'root'})
export class ImageService {
    constructor(private http : HttpClient) {}

    configUrl = 'http://localhost:8080/image'

    fetchFighterImage(name : string) {
        let params = new HttpParams().set('name', name);
        let headers = new HttpHeaders();
        return this.http.get(this.configUrl, {headers, params, responseType : 'text'});
    }
}