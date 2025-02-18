import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderBackofficeComponent } from "../header-backoffice/header-backoffice.component";
import { PerformanceChartComponent } from "./performance-chart/performance-chart.component";
import { Subject } from 'rxjs';
import { EditServiceService } from '../../edit-service.service';

@Component({
  selector: 'app-profile',
  imports: [PerformanceChartComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  private close$ = new Subject<void>();
  isEditOpen:boolean=false;

  constructor(private editService: EditServiceService){}
  

  ngOnInit():void {
    this.editService.status$.subscribe((status:boolean)=>{
      this.isEditOpen=status;
    })
    
  }
  toggleEditContainer():void{
    this.editService.changeEditStatus(!this.isEditOpen);
  }

}
