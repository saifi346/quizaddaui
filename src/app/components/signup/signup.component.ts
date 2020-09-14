import { UserserviceService } from './../../service/userservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  constructor( public userservice : UserserviceService, private router: Router) { }
 
  ngOnInit(): void {
  }
 
  onSubmit(form: NgForm) {
    this.userservice.postUser(this.userservice.selectedUser).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 400) {
          this.serverErrorMessages = err.error.message;
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }
 
  resetForm(form: NgForm) {
    this.userservice.selectedUser = {
      id: '',
      username: '',
      email: '',
      password: '',
      topics: null,
      totalScore: 0
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

  login(){
    this.router.navigateByUrl("/login")
  }
  
}
