import { Component } from '@angular/core';
import {HeaderBackofficeComponent} from '../header-backoffice/header-backoffice.component';
import {RouterOutlet} from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SidebarStatusService } from '../../services/status/sidebar-status.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [
    HeaderBackofficeComponent,
    RouterOutlet,
    SidebarComponent,
    NgClass
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutBackComponent {
  isActiveSideBar:boolean=true;

  constructor(
    private sideBarStatusService: SidebarStatusService,
  )
  {}

  ngOnInit():void{
    this.sideBarStatusService.status$.subscribe(valorProcedenteDelHeader => {
      this.isActiveSideBar = valorProcedenteDelHeader;
    })

  }
}
