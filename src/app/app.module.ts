import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizComponent } from './quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CookieService } from 'ngx-cookie-service';
import { QuizResultComponent } from './quiz/quiz-result/quiz-result.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    QuizResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HttpClientXsrfModule,
    FormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
