import { Component, Input } from '@angular/core';
import { SessionModel } from 'src/app/shared/models/SessionModel';

@Component({
  selector: 'app-sessions-table',
  templateUrl: './sessions-table.component.html',
  styleUrls: ['./sessions-table.component.css']
})
export class SessionsTableComponent {
  @Input("sessions") sessions: Array<SessionModel> = [];
}
