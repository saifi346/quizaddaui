import { Router } from '@angular/router';
import { TopicserviceService } from './../../../service/topicservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletetopic',
  templateUrl: './deletetopic.component.html',
  styleUrls: ['./deletetopic.component.css']
})
export class DeletetopicComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  topics: any;
  constructor(public topicservice: TopicserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTopics();
  }

  getAllTopics() {
    this.topicservice.getAllTopics().subscribe(
      res => {
        this.topics = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  deleteTopic(topic: any) {
    this.topicservice.deleteTopicByTopicname(topic.topicname).subscribe(
      res => {
        console.log(res);
        this.topicservice.selectedTopics.questions = null;
        this.showSucessMessage = true;
        this.ngOnInit();
      },
      err => {
        console.log(err)
        this.serverErrorMessages = err.error.message;;
      }
    )
  }

  deleteTopicQuestion(topicname : string) {
    this.topicservice.setTopicname(topicname);
    this.router.navigateByUrl("/deletequestion");
  }


}
