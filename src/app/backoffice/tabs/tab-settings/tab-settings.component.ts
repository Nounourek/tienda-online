import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-tab-settings',
  imports: [CommonModule],
  templateUrl: './tab-settings.component.html',
  styleUrl: './tab-settings.component.scss'
})
export class TabSettingsComponent {
  selectedTab: string ='chat';

  messages = [
    { name: 'Clay Masse', message: 'one saves us but ourselves...', profileImg: 'profile.jpg' },
    { name: 'Jane Doe', message: 'Just another day...', profileImg: 'profile1.jpg' },
    { name: 'John Smith', message: 'Keep pushing forward...', profileImg: 'profile3.jpg' },
    
  ];

  chatUsers=[
    {name:'Alice', message:'Available', profileImg:'profile3.jpg'},
    {name:'Bob', message:'Busy', profileImg:'profile1.jpg'},
    {name:'John Smith', message:'On Vacation!!', profileImg:'profile.jpg'}
  ];
  tasks=[
    {name:"Record the first episode", status:'not-done'},
    {name:"Design logo for future project", status:'not-done'},
    {name:"Finish up Boostrap tutorial", status:'done-badly'},
    {name:"Finish infinity project", status:'done-correctly'}
  ]
}

