import { Component } from '@angular/core';
import {HeaderClienteComponent} from '../header-cliente/header-cliente.component';
import {RouterOutlet} from '@angular/router';
import { SidebarComponent } from "../../backoffice/sidebar/sidebar.component";
import { HeaderBackofficeComponent } from "../../backoffice/header-backoffice/header-backoffice.component";

@Component({
  selector: 'app-layout',
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
