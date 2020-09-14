import { UserserviceService } from './../../../service/userservice.service';
import { User } from './../../../modal/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {

  users: any;
 
  constructor(private userService: UserserviceService, private router: Router) { }
 
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      res => {
        this.users = res;
      },
      err => {
        console.log(err);
 
      }
    );
  }
 
  ViewUserProfile(user : User){
    
     this.userService.setUsername(user.username);
     this.router.navigateByUrl('/profile');
  }
 
  
  deleteUser(user: User) {
    this.userService.deleteUserByUsername(user.username).subscribe(
      res => {
        this.ngOnInit();
      },
      err => {
        console.log(err);
 
      }
    );
  }

  

}
