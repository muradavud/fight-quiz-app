import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  @ViewChild('form') form;
  

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value.login);
    console.log(form.value.password);

    this.authService.login(form.value).subscribe(resp => 
      console.log(resp)
    )
  }

}
