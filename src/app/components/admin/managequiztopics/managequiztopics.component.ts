import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managequiztopics',
  templateUrl: './managequiztopics.component.html',
  styleUrls: ['./managequiztopics.component.css']
})
export class ManagequiztopicsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

   addTopic(){
     this.router.navigateByUrl("/addtopic");
   }

   deleteTopic(){
    this.router.navigateByUrl("/deletetopic");
  }
}
