import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SessionQuestionsTableComponent } from './session-questions-table/session-questions-table.component';
import { SharedModule } from '../shared/shared.module';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionsTableComponent } from './sessions-table/sessions-table.component';
import { NewSessionModalComponent } from './new-session-modal/new-session-modal.component';
import { SessionDetailsComponent } from './session-details/session-details.component';


@NgModule({
  declarations: [
    SessionQuestionsTableComponent,
    SessionDetailsComponent,
    SessionsComponent,
    SessionsTableComponent,
    NewSessionModalComponent,
  ],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    SharedModule
  ]
})
export class SessionsModule { }
