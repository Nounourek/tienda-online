import { Component, NgModule, OnInit, } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType } from 'chart.js';
import {BaseChartDirective,} from 'ng2-charts';
  
import { CommonModule } from '@angular/common';
import { SmallChartsComponent } from "./small-charts/small-charts.component";


@Component({
  selector: 'app-graphic-primera-caja',

  imports: [BaseChartDirective,
    CommonModule, SmallChartsComponent],
  providers:[],
  standalone:true,
  templateUrl: './graphic-primera-caja.component.html',
  styleUrl: './graphic-primera-caja.component.scss'
})
export class GraphicPrimeraCajaComponent implements OnInit {
  ngOnInit(): void {
    this.setChartData()
    
  }

  public doughnutChartOptions: ChartConfiguration['options']={
    responsive:true, //Linea obligatoria
    maintainAspectRatio:false, //Proporcion del grafico
    plugins:{
      legend:{ //campo opcional
        display:false,
        position:'bottom',
      },
      tooltip:{},
        title:{
          text: "Primer grafico",
          display:false,
        }
      }
    }

    public doughnutChartLabels:string[]=[]
    public doughnutChartData:{
      labels:string[],
      datasets: ChartDataset<'doughnut'>[],

    }={
      labels:[],
      datasets:[
        {
          data:[],
          backgroundColor:[],
          hoverBackgroundColor:[],

        }
      ]
    }
    public doughnutChartType: ChartType = 'doughnut';

   
    
      /*{
        data:[10,20,30,40,50],
        borderColor:'#8338ec',
      },
      {
        data:[5,10,15,25,35],
        borderColor:'#ffbe0b',
      },
      {
        data:[15,25,35,45,55],
        borderColor:'#3a86ff'
      }
    ];*/

    private setChartData():void{
      this.doughnutChartLabels=[
        'Label 1',
        'Label 2',
        'Label 3',
        
      ]
      this.doughnutChartData.labels=[
        'Label 1',
        'Label 2',
        'Label 3',
        

      ]
      this.doughnutChartData.datasets[0].data=[44, 5, 50]
      this.doughnutChartData.datasets[0].backgroundColor=['#8338ec', '#ffbe0b', '#3a86ff']
      this.doughnutChartData.datasets[0].hoverBackgroundColor=['white']

    }
   
  }

  


