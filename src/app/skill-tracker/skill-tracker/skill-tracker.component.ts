import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { SkillTrackerService } from '../skill-tracker.service';

@Component({
  selector: 'app-skill-tracker',
  templateUrl: './skill-tracker.component.html',
  styleUrls: ['./skill-tracker.component.css']
})
export class SkillTrackerComponent implements OnInit{

  userId: any;
  sessions: any;

  constructor(private authService: AuthService, private skillTrackerService: SkillTrackerService){}


  ngOnInit(): void {
    this.authService.currentUserData.subscribe(x => {
      this.userId = x.userId;
    })

    this.getEmployeeSessions()
  }



  getEmployeeSessions(){
    this.skillTrackerService.getEmployeeSessions(this.userId).subscribe(x => {
      this.sessions = x;
      console.log(x)
    })
  }


}
