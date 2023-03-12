import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  createUser(values: any){
    return this.http.post<any>(this.baseUrl + 'account/createaccountforuser', values);
  }

  getAllEmployees(){
    return this.http.get<any>(this.baseUrl + 'account/getAllEmployees');
  }

  getEmployeeSessions(userId: string){
    return this.http.get<any>(this.baseUrl + `account/getEmployeeSessions/${userId}`);
  }

  addEmployeeSession(sessopnDetails: any){
    return this.http.post<any>(this.baseUrl + `account/addEmployeeSession`, sessopnDetails);
  }

  getAllSessions(){
    return this.http.get<any>(this.baseUrl + 'SkillsTracker/getAllSessions');
  }

}
