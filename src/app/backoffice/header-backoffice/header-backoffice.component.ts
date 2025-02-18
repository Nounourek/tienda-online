import { Component, ElementRef, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';
import { TabNotificationComponent } from "../tabs/tab-notification/tab-notification.component";
import { TabShortcutsComponent } from '../tabs/tab-shortcuts/tab-shortcuts.component';
import { TabProfileComponent } from '../tabs/tab-profile/tab-profile.component';
import { SidebarStatusService } from '../../services/status/sidebar-status.service';
import { TabSettingsComponent } from "../tabs/tab-settings/tab-settings.component";


@Component({
  selector: 'app-header-backoffice',
  imports: [
    NgIf,
    TabNotificationComponent,
    TabShortcutsComponent,
    TabProfileComponent,
    TabSettingsComponent
],
  standalone:true,
  templateUrl: './header-backoffice.component.html',
  styleUrl: './header-backoffice.component.scss'
})

export class HeaderBackofficeComponent {
isActive: boolean=true;

isActiveItems:any={ 
  isActiveNotification:false, 
  isActiveShortcut:false, 
  isActiveProfile:false,
  isActiveSettings:false,
}
constructor
(private sideBarStatusService: SidebarStatusService,
  private elementRef: ElementRef
){

}


toggleLogo(){
  this.isActive=!this.isActive;
  this.sideBarStatusService.changeStatus(this.isActive);
  }

  toggleItem(option:string){
    if(this.isActiveItems[option]){
      this.isActiveItems[option]=false;
    }
  
  else{
    Object.keys(this.isActiveItems).forEach((item) => {
      this.isActiveItems[item]=false
    })
    this.isActiveItems[option]=true;
  }

}
@HostListener('document:click', ['$event'])
closeTabs(event:Event){
  if(!this.elementRef.nativeElement.contains(event.target)){
    Object.keys(this.isActiveItems).forEach(item=> {
      this.isActiveItems[item]=false;
    });
  }
}
  
}
