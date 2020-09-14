import { Question } from './../../modal/question';
import { TopicserviceService } from './../../service/topicservice.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  topic: any;
  score: number = 0;
  ans: string;
  i : number = 0;
  
  constructor(public topicservice: TopicserviceService, private router : Router) { }

  ngOnInit(): void {
    this.getTopicByName();
  }

   answer : string[] = new Array();
  selectedAnswer(qstn,event:any) {
   var j=0;
    for (let question of this.topic.questions) {
          if(question.question == qstn ){
                this.answer[j] = event.target.value;
          }
          j++;
  }}

  getTopicByName() {
    this.topicservice.getTopicByName(this.topicservice.getTopicname()).subscribe(
      res => {
        this.topic = res;
      },
      err => {
        console.log(err);
      }
    );
  }



  onSubmit(form : NgForm) {
    var k=0;
    for (let question of this.topic.questions) {

         if(question.answer == this.answer[k]){
           this.score+=1;
         }
         k++;
    }
    this.topicservice.setMaxScore(k);
    this.topicservice.setScore(this.score);
    this.router.navigateByUrl('/score');
  }
}


