import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionAssigmentComponent } from './session-assigment/session-assigment.component';
import { SkillTrackerComponent } from './skill-tracker/skill-tracker.component';

const routes: Routes = [
  {path: "", component: SkillTrackerComponent},
  {path: "session/:id", component: SessionAssigmentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillTrackerRoutingModule { }
