import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-details-table',
  templateUrl: './employee-details-table.component.html',
  styleUrls: ['./employee-details-table.component.css']
})
export class EmployeeDetailsTableComponent {

  @Input('sessions') sessions:  any;
}
