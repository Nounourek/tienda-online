import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType, Chart, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


Chart.register(...registerables);
@Component({
  selector: 'app-graphic-segunda-caja',
  imports: [BaseChartDirective],
  templateUrl: './graphic-segunda-caja.component.html',
  styleUrl: './graphic-segunda-caja.component.scss'
})
export class GraphicSegundaCajaComponent implements OnInit{


  isMonthly:boolean=true;
  ngOnInit(): void {
    
  }

  public pointChartOptions: ChartConfiguration['options']={
    responsive:true,
    maintainAspectRatio:false,
    plugins:{
      legend:{
        display:false,
        position:'bottom',
      },
      tooltip:{},
      title:{
        text:"Segundo Grafico",
        display:true,
      }
    },
    scales:{
      x:{
        type:'category',
      },
      y:{
        beginAtZero:true,
        suggestedMin: 0,    // Valor mínimo en el eje Y
      suggestedMax: 500,  // Valor máximo en el eje Y (ajusta según tus datos)
      ticks: {
        stepSize: 125,    // Espaciado entre los números del eje Y
      }
    }
      }
    
  };

  public monthlyChartData= {
    labels:['Jan', 'Feb', 'April', 'May', 'June'],
    datasets: [
      {
            
            data: [0, 500, 375, 225, 420],
            borderColor:'blue',
            borderWidth:1,
            pointBackgroundColor:['red', 'green', 'blue', 'orange', 'purple'],
            pointRadius:6,
            pointHoverRadius:8,
            fill:false
          }
        ]
      
      };
      public weeklyChartData= {
        labels:['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
        datasets: [
          {
                
                data: [100, 210, 225, 420, 310, 200, 80],
                borderColor:'green',
                borderWidth:1,
                pointBackgroundColor:['red', 'green', 'blue', 'orange', 'purple', 'pink', 'yellow'],
                pointRadius:6,
                pointHoverRadius:8,
                fill:false
              }
            ]
          
          };


  public pointChartData={...this.monthlyChartData};
  public pointChartType: ChartType = "line";
  
  toggleChartData():void{
    this.isMonthly=!this.isMonthly; //cambiar el estado
    this.pointChartData=this.isMonthly ? {...this.monthlyChartData}: {...this.weeklyChartData};
  }

    

  }

