import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderBackofficeComponent } from "../header-backoffice/header-backoffice.component";
import { PerformanceChartComponent } from "./performance-chart/performance-chart.component";
import { Subject } from 'rxjs';
import { EditServiceService } from '../../edit-service.service';
import { CalendarComponent } from '../../calendar/calendar.component';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { TweetCarouselComponent } from "../../tweet-carousel/tweet-carousel.component";


@Component({
  selector: 'app-profile',
  imports: [PerformanceChartComponent, CalendarComponent, NgClass, FormsModule, NgIf, TweetCarouselComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  username:string='';
  email:string='';
  currentPassword:string='';
  newPassword:string='';
  confirmNewPassword:string='';


  passwordMismatch:boolean=false;
  

  private close$ = new Subject<void>();
  isEditOpen:boolean=false;

  constructor(private editService: EditServiceService){}
  

  ngOnInit():void {
    this.editService.status$.subscribe((status:boolean)=>{
      this.isEditOpen=status;
    })
    
  }
  checkPasswordMismatch():void{
    this.passwordMismatch=this.newPassword !==this.confirmNewPassword;
  }
  toggleEditContainer():void{
    this.editService.changeEditStatus(!this.isEditOpen);
  }
  onSubmit(profileForm : NgForm):void{
    
    console.log('Form submitted', profileForm.value);

    if (this.newPassword!== this.confirmNewPassword){
      alert('Las contraseñas no coinciden');
      return;
    }
    if(this.newPassword.length<6){
      alert('La nueva contraseña debe tener al menos 6 caracteres');
      return;
    }
    this.editService.changePassword(this.newPassword);

    this.resetForm();
    profileForm.resetForm();

    this.toggleEditContainer();
    
  }
  
  resetForm():void{
    this.username='';
    this.email='';
    this.currentPassword='';
    this.newPassword='';
    this.confirmNewPassword='';
  }

}
