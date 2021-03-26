import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuizResultComponent } from './quiz/quiz-result/quiz-result.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path : 'home', component: HomeComponent },
  { path : 'login', component: LoginComponent },
  { path : 'signup', component: RegisterComponent },
  { path : 'quiz', canActivate: [AuthGuardService], component: QuizComponent},
  { path : 'result', canActivate: [AuthGuardService], component: QuizResultComponent },
 
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
