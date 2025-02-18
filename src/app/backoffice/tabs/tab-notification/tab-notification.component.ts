import { Component, Input, OnInit } from '@angular/core';
import { TruncateTextPipe } from '../../../services/pipes/truncate-text.pipe';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'app-tab-notification',
  imports: [TruncateTextPipe, CommonModule],
  templateUrl: './tab-notification.component.html',
  styleUrl: './tab-notification.component.scss'
})
export class TabNotificationComponent implements OnInit{
  
  constructor(){}

  ngOnInit(): void {
    
    
  }

}
