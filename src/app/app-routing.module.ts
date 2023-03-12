import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './core/home/home.component';
import { SessionReportComponent } from './core/components/session-report/session-report.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {
    path: "skilltracker",
    loadChildren: () => import('./skill-tracker/skill-tracker.module').then(m => m.SkillTrackerModule),
    data: {
      permission: "solve-tests"
    },
    canActivate: [AuthGuard]
  },
  {
    path: "sessions",
    loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
    data: {
      permission: "manage-skills"
    },
    canActivate: [AuthGuard]
  },
  {
    path: "employees",
    loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
  },
  {
    path: "account", loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: "profile", loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {path: "sessionReport/:id", component: SessionReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
