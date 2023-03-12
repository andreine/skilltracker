import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SkillTrackerRoutingModule } from './skill-tracker-routing.module';
import { SkillTrackerComponent } from './skill-tracker/skill-tracker.component';
import { SessionsTableComponent } from './sessions-table/sessions-table.component';
import { SessionAssigmentComponent } from './session-assigment/session-assigment.component';

@NgModule({
  declarations: [
    SkillTrackerComponent,
    SessionsTableComponent,
    SessionAssigmentComponent,
  ],
  imports: [
    CommonModule,
    SkillTrackerRoutingModule,
    SharedModule,
  ]
})
export class SkillTrackerModule { }
