import { Component, OnInit } from '@angular/core';
import { HeaderBackofficeComponent } from '../header-backoffice/header-backoffice.component';
import { RouterOutlet } from '@angular/router';
import { SidebarStatusService } from '../../services/status/sidebar-status.service';
import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [NgFor, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{

  isActiveMenuHeader: boolean =true;
  isSidebarOpen:boolean=true;
  showMenu:boolean=false;

  menuOptions = [
    { name: 'Lista de productos' },
    { name: 'Orden de compra' },
    { name: 'Historial de pedidos' }

  ];

  constructor(
    private sidebarStatusService: SidebarStatusService,
  ){}
  ngOnInit(): void {
    this.sidebarStatusService.status$.subscribe(status => {
      this.isActiveMenuHeader = status;

      
    });
  }
  toggleMenu(){
    this.showMenu=!this.showMenu;
  }
    
  }


