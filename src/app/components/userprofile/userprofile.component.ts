import { Router } from '@angular/router';
import { UserserviceService } from './../../service/userservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  user : any;
  constructor(public userservice: UserserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this.userservice.getUserProfile(this.userservice.getUserName()).subscribe(
      res => {
        this.user = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  goToLeaderBoard(){
    this.router.navigateByUrl('/leaderboard');
  }

}
