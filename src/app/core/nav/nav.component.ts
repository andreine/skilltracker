import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  canManageQuestions = false;
  canTakeTests = false;
  canManageUsers = false;

  constructor(public auth: AuthService){}

  
  ngOnInit(): void {
    this.auth.currentUserData.subscribe(x => {
      let permission = x.permissions;
        if(permission === "manage-skills"){
          this.canManageQuestions = true;
        }else if(permission ==="solve-tests"){
          this.canTakeTests = true;
        }else if (permission ==="review-skills"){
          this.canManageUsers = true;
        }
    })

  }

  logout(){
    this.auth.logout();
  }



  
}
