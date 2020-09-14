import { TopicserviceService } from './../../service/topicservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics : any;

  constructor(public topicservice :  TopicserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTopics();
  }

  getAllTopics(){
    this.topicservice.getAllTopics().subscribe(
      res=>{
         this.topics = res;
      },
      err=>{
        console.log(err);
      }
    )
  }

  

  startQuiz(topicname: string){
      this.topicservice.setTopicname(topicname);
      this.router.navigateByUrl('/question');
  }

}
