import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-add-session-modal',
  templateUrl: './add-session-modal.component.html',
  styleUrls: ['./add-session-modal.component.css']
})
export class AddSessionModalComponent implements OnInit{
  @Input() showModal! : boolean;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  sessions: any;
  newSessionForm !: FormGroup;
  userId: any;


  constructor(private employeeService: EmployeesService,
    private toastr: ToastrService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.newSessionForm = new FormGroup({
      userId: new FormControl(""),
      sessionId: new FormControl(),
    })
    this.getAllSessions();
    this.route.paramMap.subscribe(x => {
      this.userId = x.get('id')!;
    })
  }

  getAllSessions(){
    this.employeeService.getAllSessions().subscribe(
      {
        next: (x) => {
          this.sessions = x;
        },
        error: (error) => {
          this.toastr.error("Could not create session", "Failed");
          console.log(error);
        }
      }
    )
  }


  closeModal(){
    this.showModal = false;
    this.closeModalEvent.emit(this.showModal);
  }


  addEmployeeSession(){

    let newSessionData = {
      userId: this.userId,
      sessionId: this.newSessionForm.get("sessionId")?.value,
    }


    this.showModal = false;
    this.closeModalEvent.emit(this.showModal);

    this.employeeService.addEmployeeSession(newSessionData).subscribe(
      {
        next: () => {
          this.toastr.success("Session added", "Succes");
        },
        error: (error) => {
          this.toastr.error("Could not create session", "Failed");
          console.log(error);
        }
      }
    )
  }



  changeSession(event:any){
    this.newSessionForm.get('sessionId')?.setValue(event.value.id) 
  }


}
