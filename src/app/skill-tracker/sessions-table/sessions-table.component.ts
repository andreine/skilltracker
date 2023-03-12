import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-sessions-table',
  templateUrl: './sessions-table.component.html',
  styleUrls: ['./sessions-table.component.css']
})
export class SessionsTableComponent {
  @Input("sessions") sessions: any;

}
