import { TopicAttempted } from './../modal/TopicAttempted';
import { Login } from './../modal/login';
import { User } from './../modal/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
 
  //Modals
  loginUser: Login = {
    username: '',
    password: ''
  };
 
  topic : TopicAttempted = {
    topicname : '',
    score : 0
  }
  selectedUser: User = {
    id: '',
    username: '',
    email: '',
    password: '',
    topics: null,
    totalScore: 0
  };
 
  constructor(private http: HttpClient) { }
 
  //httpmethods
  postUser(user: User) {
    return this.http.post("https://quizadda52.cfapps.io/api/auth" + '/signup', user, this.noAuthHeader);
  }
 
  login(authCredentials) {
    return this.http.post("https://quizadda52.cfapps.io/api/auth" + '/signin', authCredentials, this.noAuthHeader);
  }
 
   getUserProfile(username) {
     return this.http.get("https://quizadda52.cfapps.io/api/test" + '/user' + `/${username}`);
   }
 
  getAllUsers() {
    return this.http.get("https://quizadda52.cfapps.io/api/test" + '/users');
  }
 
  updateUser(username, user) {
     return this.http.put("https://quizadda52.cfapps.io/api/test" + '/user' + `/${username}`, user);
   }
 
  deleteUserByUsername(username) {
    return this.http.delete("https://quizadda52.cfapps.io/api/test" + '/user' + `/${username}`);
  }


 
//helpers 
setToken(token: string) {
  localStorage.setItem('token', token);
}
 
setUsername(username : string){
  localStorage.setItem('username', username);
}
 
setRole(role : string){
  localStorage.setItem('role', role);
}
 
getRole() {
  return localStorage.getItem('role');
}
 
getUserName() {
  return localStorage.getItem('username');
}
 
getToken() {
  return localStorage.getItem('token');
}
 
deleteRole(){
  localStorage.removeItem('role');
}
 
deleteUsername() {
  localStorage.removeItem('username');
}
 
deleteToken() {
  localStorage.removeItem('token');
}
 
getUserPayload() {
  var token = this.getToken();
  if (token) {
    var userPayload = atob(token.split('.')[1]);
    return JSON.parse(userPayload);
  }
  else {
    return null;
  }
}
 
isLoggedIn() {
  var userPayload = this.getUserPayload();
  if (userPayload) {
    return userPayload.exp > Date.now() / 1000;
  }
  else {
    return false;
  }
}

}
