import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, ElementRef, OnInit, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Question } from '../models/question.model';
import { ImageService } from '../services/image.service';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  defaultImage = './assets/img/unknown.png';
  isAnswered = false;
  question: Question = { question: '', answer: '', options: [], fight: {} };

  spinner0 = true;
  spinner1 = true;
  image0 = this.defaultImage;
  image1 = this.defaultImage;
  vsImage = './assets/img/vs-logo.png';

  @ViewChildren('buttons') buttonsRef: QueryList<ElementRef>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService,
    private renderer: Renderer2,
    private imageService: ImageService,
    private quiz: QuizService) { }

  ngOnInit(): void {
    this.onNextQuestion();
    this.quiz.isActive = true;
  }

  onNextQuestion() {
    if (!(this.quiz.currentQuestion < this.quiz.numberOfQuestions)) {
      this.router.navigate(['../result'], {relativeTo: this.route});
    }
    console.log(this.quiz);
    
    
    this.isAnswered = false; 
    this.image0 = this.image1 = this.defaultImage; this.spinner0 = this.spinner1 = true;
    this.questionService.fetchRandomQuestion().subscribe((data: Question) => {
      this.question = {
        question: data.question,
        answer: data.answer,
        options: data.options,
        fight: data.fight
      };
      this.quiz.currentQuestion++;
      this.onFetchImages();
    })
  }

  onFetchImages() {
    this.imageService.fetchFighterImage(this.question.options[0]).subscribe(
      image => { this.image0 = image; this.spinner0 = false; },
      error => { this.spinner0 = false; });
    this.imageService.fetchFighterImage(this.question.options[1]).subscribe(
      image => { this.image1 = image; this.spinner1 = false; },
      error => { this.spinner1 = false; });
  }

  onAnswer(event) {
    this.isAnswered = true;
    this.quiz.result.push({"question": this.question, "answer": event.target.name, "correct": event.target.name == this.question.answer});
    
    if (event.target.name == this.question.answer) 
    console.log("Correct!");
    else console.log("Incorrect!");
    for (let ref of this.buttonsRef) {
      if (ref.nativeElement.name != this.question.answer)
        this.renderer.setAttribute(ref.nativeElement, "class", "btn btn-danger");
      else this.renderer.setAttribute(ref.nativeElement, "class", "btn btn-success");
      this.renderer.setAttribute(ref.nativeElement, "disabled", "true");
    }
  }
}
