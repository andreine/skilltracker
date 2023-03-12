import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-invite-modal',
  templateUrl: './invite-modal.component.html',
  styleUrls: ['./invite-modal.component.css']
})
export class InviteModalComponent implements OnInit{
  @Input() showModal! : boolean;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  roles =[
    {name: "Employee"},
    {name: "Reviewer"},
    {name: "Manager"},
  ]

  userInviteForm !: FormGroup;
  constructor(private employeesService: EmployeesService,  private toastr: ToastrService){}



  ngOnInit(): void {
    this.userInviteForm = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      role: new FormControl(""),
    })
  }

  inviteUser(){
    let userForm = {
      firstName: this.userInviteForm.get("firstName")?.value,
      lastName: this.userInviteForm.get("lastName")?.value,
      email: this.userInviteForm.get("email")?.value,
      password: this.userInviteForm.get("password")?.value,
      role: this.userInviteForm.get("role")?.value
    }
    this.showModal = false;
    this.closeModalEvent.emit(this.showModal);
    this.employeesService.createUser(userForm).subscribe(
      {
        next: () => {
          this.toastr.success("User created", "Succes");
        },
        error: (error) => {
          this.toastr.error("Could not create user", "Failed");
          console.log(error);
        }
      }
    )
    console.log(userForm)
  }



  closeModal(){
    this.showModal = false;
    this.closeModalEvent.emit(this.showModal);
  }

  changeRole(event:any){
    this.userInviteForm.get('role')?.setValue(event.value.name) 
    console.log(this.userInviteForm.get("role")?.value)
  }




}
