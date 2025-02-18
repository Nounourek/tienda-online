import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-small-charts',
  imports: [BaseChartDirective],
  templateUrl: './small-charts.component.html',
  styleUrl: './small-charts.component.scss'
})
export class SmallChartsComponent implements OnInit{
  ngOnInit(): void {
    
  }
  public smallChartOptions:ChartConfiguration['options']={
    responsive: true,
          maintainAspectRatio: false,
          plugins: { 
            legend: { display: false }, 
            tooltip: { enabled: false } 
          },
          scales: { 
            x: { display: false },
            y: { 
              display: false, 
              beginAtZero: true,
            } 
          }
        }
        public smallChartLabels:string[]=[]
        public smallChartData: ChartDataset<'line'>[]=[
          {
            data:[10, 220, 30, 40, 50],
            borderColor:'black',
            fill:false,
            tension:0.4
          }
        ]
        public smallChartType:ChartType='line';

}
