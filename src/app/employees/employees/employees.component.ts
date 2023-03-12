import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  showModal = false;
  employees = [];
  isDataLoaded = false;

  constructor(private employeesService: EmployeesService,  private toastr: ToastrService){}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  showDialog(){
    this.showModal = true;
  }

  hideModal(event : any){
    this.showModal = false;
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.employeesService.getAllEmployees().subscribe(        {
      next: (x) => {
        this.employees = x;
        this.isDataLoaded = true;
      },
      error: (error) => {
        this.toastr.error("Could not load employees", "Failed");
      }
    });
  }
}
