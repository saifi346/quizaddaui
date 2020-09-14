import { TopicAttempted } from './../../modal/TopicAttempted';
import { Router } from '@angular/router';
import { UserserviceService } from './../../service/userservice.service';
import { TopicserviceService } from './../../service/topicservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  score: string;
  maxScore : string;
  topicname: string;
  username: string
  topics = new Array();
  constructor(public topicservice: TopicserviceService, public user: UserserviceService, private router: Router) { }

  ngOnInit(): void {
    this.score = this.topicservice.getScore();
    this.maxScore = this.topicservice.getMaxScore();
    this.topicname = this.topicservice.getTopicname();
    this.username = this.user.getUserName();
    this.user.topic.topicname = this.topicname;
    this.user.topic.score = Number.parseInt(this.score);
    this.topics[0] = this.user.topic;
    this.user.selectedUser.topics = this.topics;
    this.updateUserScore();
  }

  updateUserScore() {
    this.user.updateUser(this.username,this.user.selectedUser).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  goToTopic() {
    this.router.navigateByUrl('/topic');
  }

  goToLeaderboard() {
    this.router.navigateByUrl('/leaderboard');
  }

}
