import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({providedIn: 'root'})
export class QuizService {

    constructor() {}

    numberOfQuestions: number;
    currentQuestion: number;
    isActive: boolean = false;
    result: {question: Question, answer: string, correct: boolean}[];

    init(num : number) {
        this.isActive = true;
        this.currentQuestion = 0;
        this.numberOfQuestions = num;
        this.result = [];
    }

    numOfCorrectQuestions() {
        let num = 0;
        for(let entry of this.result) {
            if (entry.correct) num++;
        }
        return num;
    }
}