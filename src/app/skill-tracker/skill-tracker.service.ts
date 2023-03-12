import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillTrackerService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getActiveSessionQuestions(){
    return this.http.get<any>(this.baseUrl + 'SkillsTracker/getquestionsemployee');
  }

  getEmployeeSessions(userId: string){
    return this.http.get<any>(this.baseUrl + `account/getEmployeeSessions/${userId}`);
  }

  getEmployeeSessionQuestions(sessionId: any){
    return this.http.get<any>(this.baseUrl + `SkillsTracker/GetEmployeeSessionQuestions/${sessionId}`);
  }


  submitSessionQuestions(questionsAnswers: any){
    return this.http.post<any>(this.baseUrl + 'SkillsTracker/SessionSubmitAnswers', questionsAnswers);
  }


  getEmployeeSessionReport(userSessionId: number){
    return this.http.get<any>(this.baseUrl + `SkillsTracker/getEmployeeSessionReport/${userSessionId}`);
  }



  getEmployeeQuestionReport(userSessionId: number){
    return this.http.get<any>(this.baseUrl + `SkillsTracker/getEmployeeQuestionReport/${userSessionId}`);
  }



}
