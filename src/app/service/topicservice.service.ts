import { Question } from './../modal/question';
import { Topic } from './../modal/topic';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicserviceService {

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  optionsList : string[] =null;
  question : Question = {
    question : '',
    options : this.optionsList,
    answer:''
  }

  selectedTopics: Topic = {
    id : '',
    topicname : '',
    questions : [this.question]
  }

  constructor(private http: HttpClient) { }

  //restcalls
   saveTopic(topic: Topic) {
    return this.http.post("https://quizadda52.cfapps.io/topic" + '/savetopic', topic);
  }
 
  getTopicByName(topicname) {
     return this.http.get("https://quizadda52.cfapps.io/topic" + `/${topicname}`);
   }
 
  getAllTopics() {
    return this.http.get("https://quizadda52.cfapps.io/topic" + '/alltopics');
  }
 
   addTopicQuestons(topic: Topic) {
    return this.http.put("https://quizadda52.cfapps.io/topic" + '/addquestion' + `/${topic.topicname}`, topic);
  }

  deleteTopicQuestons(topic: Topic) {
    return this.http.put("https://quizadda52.cfapps.io/topic" + '/deletequestion' + `/${topic.topicname}`, topic);
  }
 
  deleteTopicByTopicname(topicname) {
    return this.http.delete("https://quizadda52.cfapps.io/topic"  + `/${topicname}`);
  }

  //helper
  setTopicname(topicname : string){
    localStorage.setItem('topicname', topicname);
  }
   
  getTopicname() {
    return localStorage.getItem('topicname');
  }

  setScore(score : number){
    localStorage.setItem('score', score.toString());
  }
   
  getScore() {
    return localStorage.getItem('score');
  }
  
  setMaxScore(maxscore : number){
    localStorage.setItem('maxscore', maxscore.toString());
  }
   
  getMaxScore() {
    return localStorage.getItem('maxscore');
  }

  
}
