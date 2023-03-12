import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }


  getUserProfile(){
    return this.http.get<any>(this.baseUrl + 'Account/getUserProfile');
  }


}
