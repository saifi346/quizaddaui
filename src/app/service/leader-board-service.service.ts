import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderBoardServiceService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http : HttpClient) { }

  getLeaderBoard() {
    return this.http.get("https://quizadda52.cfapps.io/leaderboard" + '/overall');
  }
  getLeaderBoardByTopic(topicname) {
    return this.http.get("https://quizadda52.cfapps.io/leaderboard" + `/${topicname}`);
  }
}
