import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SessionModel } from '../shared/models/SessionModel';
import { SessionQuestionModel } from '../shared/models/SessionQuestionModel';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  addNewSession(values: any){
    return this.http.post<any>(this.baseUrl + 'skillstracker/addNewSession', values);
  }

  getAllSessions(){
    return this.http.get<Array<SessionModel>>(this.baseUrl + 'skillstracker/getAllSessions');
  }

  getSessionQuestions(sessionId: string){
    return this.http.get<Array<SessionQuestionModel>>(this.baseUrl + `skillstracker/getsessionquestions/${sessionId}`);
  }

  uploadExcelData(formData: any){
    return this.http.post<any>(this.baseUrl + 'skillstracker/uploadSkills', formData);
  }
}
