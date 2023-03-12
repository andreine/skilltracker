import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent  implements OnInit{
  showModal = false;
  userId!: string;
  employeeSessions = [];

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private employeeService: EmployeesService
  ){}


  ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      this.userId = x.get('id')!;
      this.getEmployeeSessions();
    })
  }



  showDialog(){
    this.showModal = true;
  }

  
  getEmployeeSessions(){
    this.employeeService.getEmployeeSessions(this.userId).subscribe(x => {
        this.employeeSessions = x;
    });
  }


  hideModal(event : any){
    console.log(event)
    this.getEmployeeSessions()
    this.showModal = false;
  }




}
