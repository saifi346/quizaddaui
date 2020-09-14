import { UserserviceService } from './../../service/userservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  serverErrorMessages: boolean;
 
  constructor(public userservice: UserserviceService, private router: Router) { }
 
  ngOnInit(): void {
    // if(this.userservice.isLoggedIn()){
    //   this.router.navigateByUrl('/userprofile');
    // }
  }
 
  onSubmit(form: NgForm) {
    this.userservice.login(this.userservice.loginUser).subscribe(
      res => {
        this.userservice.setToken(res['token']);
        this.userservice.setUsername(res['username']);
        if (this.userservice.getUserName().match("admin")) {
          this.userservice.setRole('admin');
        }
        else {
          this.userservice.setRole('user');
        }
        this.router.navigateByUrl('topic');
      },
      err => {
        this.serverErrorMessages = true;
        setTimeout(() => this.serverErrorMessages = false, 4000);
      }
    );
  }

  signup(){
    this.router.navigateByUrl("/signup")
  }
}
