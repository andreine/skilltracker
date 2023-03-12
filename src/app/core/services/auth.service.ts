import { Injectable } from '@angular/core';
import {  ReplaySubject } from 'rxjs';
import jwt_decode from "jwt-decode";
import { UserModel } from 'src/app/shared/models/UserModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserData = new ReplaySubject<UserModel>(1);
  
  constructor(private router: Router) { }

  loadUserData(token: string | null){
    let currentToken = localStorage.getItem('token');
    let userDetails = null;

    if(token && currentToken){
      localStorage.removeItem('token');
      localStorage.setItem("token", token!);
      currentToken = localStorage.getItem('token');
    }else if(!token && currentToken)
    {
      currentToken = localStorage.getItem('token');
    }else if(!token && !currentToken){
      userDetails = null;
      currentToken = null;
    }else if(token && !currentToken){
      localStorage.setItem("token", token!);
      currentToken = localStorage.getItem('token');
    }
    if(currentToken){
      let decodedJWT: any = jwt_decode(currentToken!);
      let newUser: UserModel = {
        email: decodedJWT.email, 
        permissions: decodedJWT.permissions,
        userId: decodedJWT.userId
      }
      this.currentUserData.next(newUser);
    }else{
      this.router.navigate(['account/login'])
    }
  }


  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['account/login']);
    location.reload();
  }


}
