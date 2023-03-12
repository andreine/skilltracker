import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { SharedModule } from '../shared/shared.module';
import { InviteModalComponent } from './invite-modal/invite-modal.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDetailsTableComponent } from './employee-details-table/employee-details-table.component';
import { AddSessionModalComponent } from './add-session-modal/add-session-modal.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    InviteModalComponent,
    EmployeesTableComponent,
    EmployeeDetailsComponent,
    EmployeeDetailsTableComponent,
    AddSessionModalComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule
  ]
})
export class EmployeesModule { }
