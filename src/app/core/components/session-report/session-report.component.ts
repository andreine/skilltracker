import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SkillTrackerService } from '../../../skill-tracker/skill-tracker.service';
import { AuthService } from '../../services/auth.service';
import { UserCommonService } from '../../services/user-common.service';

@Component({
  selector: 'app-session-report',
  templateUrl: './session-report.component.html',
  styleUrls: ['./session-report.component.css']
})
export class SessionReportComponent implements OnInit{
  categories : Array<string> = [];
  scores : Array<number> = [];
  showGraph=false;

  questionReport: any;

  employeeDetails: any;
  currentUserDetails:any;

  userSessionId: any;
  constructor(
    private trackerService: SkillTrackerService, 
    private toastr: ToastrService, 
    private router: Router,
    private route: ActivatedRoute,
    private userCommonService: UserCommonService,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      this.userSessionId = Number.parseInt(x.get('id')!);
      this.getEmployeeSessionReport(this.userSessionId);
      this.getEmployeeQuestionReport(this.userSessionId);
      this.getEmployeeDetailsOnSessionId(this.userSessionId);
      this.authService.currentUserData.subscribe(x => {
        this.currentUserDetails = x;
      })
    })
  }


  getEmployeeSessionReport(userSessionId: number){
    this.trackerService.getEmployeeSessionReport(userSessionId).subscribe(
      {
        next: (x: any) => {
          for (let s of x){
            this.categories.push(s.categoryName);
            this.scores.push(s.finalScore * 100);
          }
          this.showGraph=true;
        },
        error: (error) => {
          this.toastr.error("Could not create session", "Failed");
        }
      }
    )
  }


  getEmployeeQuestionReport(userSessionId: number){
    this.trackerService.getEmployeeQuestionReport(userSessionId).subscribe(
      {
        next: (x: any) => {
          this.questionReport = x;
        },
        error: (error) => {
          this.toastr.error("Could not create session", "Failed");
        }
      }
    )
  }

  navigateTo(){
    if(this.currentUserDetails.permissions === "solve-tests"){
      this.router.navigate(['skilltracker'])
    }else if(this.currentUserDetails.permissions === "manage-skills"){
      this.router.navigate([`../../employees/employee/${this.employeeDetails.userId}`])
    }
  }




  getEmployeeDetailsOnSessionId(userSessionId: number){
    this.userCommonService.getEmployeeDetailsOnSessionId(userSessionId).subscribe(
      {
        next: (x: any) => {
          this.employeeDetails = x;
        },
        error: (error) => {
          this.toastr.error("Could not create session", "Failed");
        }
      }
    )
  }

  


}
