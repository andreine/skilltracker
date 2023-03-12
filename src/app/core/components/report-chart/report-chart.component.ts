import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-report-chart',
  templateUrl: './report-chart.component.html',
  styleUrls: ['./report-chart.component.css']
})
export class ReportChartComponent implements OnInit{
  pieChartData: any;
  barChartData: any;
  radarChartData: any;

  chartOptions: any;

  subscription!: Subscription;
  maximum: Array<number> = [];

  charts: any;
  selectedChart = 'bar';

  @Input('categories') categories: any;
  @Input('scores') scores: any;


  constructor() {}

  ngOnInit() {
    this.charts = [
        {name: 'bar', code: 'BA'},
        {name: 'pie', code: 'PI'},
        {name: 'radar', code: 'RA'},
    ];

    this.initPieChartOptions();
    this.initRadarChartData();
    this.initBarChartData();
  }

  initPieChartOptions(){
    let color : Array<string> = [];
    let hoverColor : Array<string> = [];
    this.scores.forEach((e:any) => {
      color.push(this.getRandomColor());
      hoverColor.push(this.getRandomColor());
    });
      this.pieChartData = {
        labels: this.categories,
        datasets: [
            {
              data: this.scores,
              backgroundColor: color,
              hoverBackgroundColor: hoverColor,
            }
        ]
    };
  }


  initRadarChartData(){
    this.scores.forEach((e:any) => {
      this.maximum.push(100);
    });
    this.radarChartData = {
      labels: this.categories,
      datasets: [
          {
              label: 'User Skill Chart',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              pointBackgroundColor: 'rgba(255,99,132,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,99,132,1)',
              data:  this.scores
          },
          {
            label: 'Maximum possible',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data:  this.maximum
        }
      ]
  };
}


initBarChartData(){
  this.barChartData = {
    labels: this.categories,
    datasets: [
        {
            label: 'User Skill Chart',
            backgroundColor: '#42A5F5',
            data:  this.scores
        }
    ]
};
}


getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

  onChartChange(event: any){
  }


}
