import { TopicserviceService } from './../../service/topicservice.service';
import { LeaderBoardServiceService } from './../../service/leader-board-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  leaderBoard: any;
  selectedStatus: string;
  topics : any;
  constructor(private leadservice: LeaderBoardServiceService, public topicservice : TopicserviceService) { }

  ngOnInit(): void {
    this.getLeaderBoard();
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

  getLeaderBoard() {
    this.leadservice.getLeaderBoard().subscribe(
      res => {
        this.leaderBoard = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  getLeaderBoardByTopic() {
    this.leadservice.getLeaderBoardByTopic(this.selectedStatus).subscribe(
      res => {
        this.leaderBoard = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  selectStatusHandler(event: any) {
    this.selectedStatus = event.target.value;
    if (this.selectedStatus == 'Overall') {
      this.getLeaderBoard();
    }
    else {
      this.getLeaderBoardByTopic();
    }
  }

}
