import { Router } from '@angular/router';
import { TopicserviceService } from './../../../service/topicservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managetopic',
  templateUrl: './managetopic.component.html',
  styleUrls: ['./managetopic.component.css']
})
export class ManagetopicComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;
  topics: any;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  constructor(public topicservice: TopicserviceService, private router : Router) { }

  ngOnInit(): void {
  }

  addQuestion() {
    this.createTopicObject();
    this.updateTopic();
    this.resetQuestion();
  }

  // saveTopic() {
  //   this.topicservice.saveTopic(this.topicservice.selectedTopics).subscribe(
  //     res => {
  //       console.log(res);
  //     },
  //     err => {
  //       console.log(err)
  //     }
  //   )
  // }

  updateTopic() {
    this.topicservice.addTopicQuestons(this.topicservice.selectedTopics).subscribe(
      res => {
        console.log(res);
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
      },
      err => {
        console.log(err)
        this.serverErrorMessages = err.error.message;
      }
    )
  }

  resetQuestion() {
    this.option1 = '';
    this.option2 = '';
    this.option3 = '';
    this.option4 = '';
    this.topicservice.optionsList = null;
    this.topicservice.question.options = null;
    this.topicservice.question.question = '';
    this.topicservice.question.answer = '';
    this.topicservice.selectedTopics.questions = null;
  }

  createTopicObject() {
    this.topicservice.optionsList = [this.option1, this.option2, this.option3, this.option4];
    this.topicservice.question.options = this.topicservice.optionsList;
    this.topicservice.selectedTopics.questions = [this.topicservice.question];
  }

  goToTopics(){
    this.router.navigateByUrl("/topic");
  }

}
