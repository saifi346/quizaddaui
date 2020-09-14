import { UserserviceService } from './../../service/userservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userService : UserserviceService, private router: Router) { }
 
  ngOnInit(): void {
    this.onLogout()
  }
 
  onLogout(){
    this.userService.deleteToken();
    this.userService.deleteUsername();
    this.userService.deleteRole();
    this.userService.loginUser = {username:'', password : ''};
    this.router.navigate(['/login']);
  }

}
