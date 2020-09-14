import { TopicserviceService } from './../../../service/topicservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletetopicquestions',
  templateUrl: './deletetopicquestions.component.html',
  styleUrls: ['./deletetopicquestions.component.css']
})
export class DeletetopicquestionsComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  topicname: string;
  topic : any;
  constructor(public topicservice: TopicserviceService) { }

  ngOnInit(): void {
    this.topicname = this.topicservice.getTopicname();
    this.getTopicByName();
  }

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

  deleteQuestion(question:any){
    this.topicservice.selectedTopics.questions = [question];
    this.topicservice.selectedTopics.topicname = this.topicservice.getTopicname();
    this.topicservice.deleteTopicQuestons(this.topicservice.selectedTopics).subscribe(
      res=>{
        console.log(res);
        this.topicservice.selectedTopics.questions = null;
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
          this.ngOnInit();
      },
      err => {
        console.log(err)
        this.serverErrorMessages = err.error.message;;
      }
    )
  }

}
