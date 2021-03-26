import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private quiz: QuizService) { }

  ngOnInit(): void {
     console.log(this.quiz);
    
  }

  onSubmit(quizForm: NgForm) {
    console.log(quizForm.value);

    this.quiz.init(quizForm.value.number);
    this.router.navigate(['quiz']);

  }

}
