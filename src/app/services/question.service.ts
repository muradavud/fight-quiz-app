import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Question } from '../models/question.model';

@Injectable({providedIn: 'root'})
export class QuestionService {

    constructor(private http : HttpClient) {}

    configUrl = 'http://localhost:8080/question/random'

    fetchRandomQuestion() {
        return this.http.get(this.configUrl)
    }
}