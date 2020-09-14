import { HomeComponent } from './components/home/home.component';
import { UserserviceService } from './service/userservice.service';
import { SigninComponent } from './components/signin/signin.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ManageuserComponent } from './components/admin/manageuser/manageuser.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TopicsComponent } from './components/topics/topics.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { ScoreComponent } from './components/score/score.component';
import { ManagetopicComponent } from './components/admin/managetopic/managetopic.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { ManagequiztopicsComponent } from './components/admin/managequiztopics/managequiztopics.component';
import { DeletetopicComponent } from './components/admin/deletetopic/deletetopic.component';
import { DeletetopicquestionsComponent } from './components/admin/deletetopicquestions/deletetopicquestions.component';

const routes: Routes = [
  {
    path: 'signup', component: SignupComponent,
  },
  {
    path: 'login', component: SigninComponent,
  },
  {
    path: 'profile', component: UserprofileComponent,
  },
  {
    path: 'logout', component: LogoutComponent,
  },
  {
    path: 'topic', component: TopicsComponent,
  },
  {
    path: 'question', component: QuestionsComponent,
  },
  {
    path: 'score', component: ScoreComponent,
  },
  {
    path: 'leaderboard', component: LeaderboardComponent,
  },
  {
    path: 'manageusers', component: ManageuserComponent, canActivate : [AuthGuard],
  },
  {
    path: 'managetopics', component: ManagequiztopicsComponent, canActivate : [AuthGuard],
  },
  {
    path: 'addtopic', component: ManagetopicComponent, canActivate : [AuthGuard],
  },
  {
    path: 'deletetopic', component: DeletetopicComponent, canActivate : [AuthGuard],
  },
  {
    path: 'deletequestion', component: DeletetopicquestionsComponent, canActivate : [AuthGuard],
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    ManageuserComponent,
    LogoutComponent,
    HomeComponent,
    TopicsComponent,
    QuestionsComponent,
    LeaderboardComponent,
    ScoreComponent,
    ManagetopicComponent,
    UserprofileComponent,
    ManagequiztopicsComponent,
    DeletetopicComponent,
    DeletetopicquestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, UserserviceService, AuthGuard, AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
