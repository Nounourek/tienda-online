import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-performance-chart',
  standalone: true,
  templateUrl: './performance-chart.component.html',
  styleUrls: ['./performance-chart.component.scss'],
  imports: [CommonModule, BaseChartDirective],
})
export class PerformanceChartComponent implements OnInit {

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display:false,
        position: 'bottom',
      },
      title: {
        text: 'Rendimiento Personal Semanal',
        display: true,
      }
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      }
    }
  };

  public barChartLabels: string[] = ['L', 'M', 'X', 'J', 'V'];

  public barChartData: {
    labels: string[],
    datasets: ChartDataset<'bar'>[], 
  } = {
    labels: ['L', 'M', 'X', 'J', 'V'],
    datasets: [
      {
        label: 'Rendimiento',  // Add a label for the dataset here
        data: [27, 40, 67, 50, 32],
        backgroundColor: ['#4cc9f0', '#4361ee', '#3a0ca3', '#7209b7', '#f72585'],
        hoverBackgroundColor: ['white'],
      }
    ]
  };

  public barChartType: ChartType = 'bar';



  ngOnInit(): void {
  }
}
