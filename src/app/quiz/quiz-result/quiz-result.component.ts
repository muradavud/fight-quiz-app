import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {

  correct = 0;
  total = 0;

  constructor(
    private quiz: QuizService
  ) { }

  ngOnInit(): void {
    this.total = this.quiz.numberOfQuestions;
    this.correct = this.quiz.numOfCorrectQuestions();
    this.quiz.isActive = false;
  }

}
