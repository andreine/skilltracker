import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ReportAnswersComponent } from './components/report-answers/report-answers.component';
import { ReportChartComponent } from './components/report-chart/report-chart.component';
import { SessionReportComponent } from './components/session-report/session-report.component';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    HomeComponent,
    ReportAnswersComponent,
    ReportChartComponent,
    SessionReportComponent
  ],
  imports: [
    // CommonModule,
    // SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      timeOut: 2000
    }),
    ChartModule,
    TabViewModule
  ],
  exports: [NavComponent, FooterComponent]
})
export class CoreModule { }
