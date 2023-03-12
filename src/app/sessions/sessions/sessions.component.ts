import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SessionModel } from 'src/app/shared/models/SessionModel';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit{
  showModal = false;
  sessions: Array<SessionModel> = [];

  constructor(private skillManagerService: SessionsService, private toastr: ToastrService){}


  ngOnInit(): void {
    this.loadSessions();
  }

  loadSessions(): void{
    this.skillManagerService.getAllSessions().subscribe(
      {
        next: (x: Array<SessionModel>) => {
          this.sessions = x;
        },
        error: (error) => {
          this.toastr.error("Could not load sessions", "Failed");
        }
      }
    )
  }

  showDialog(): void{
    this.showModal = true;
  }

  hideModal(event : any): void{
    this.showModal = false;
    this.loadSessions();
  }

  
}
