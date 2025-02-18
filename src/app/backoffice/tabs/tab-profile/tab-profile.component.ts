import { Component } from '@angular/core';
import { ProfileComponent } from "../../profile/profile.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab-profile',
  imports: [RouterModule],
  standalone:true,
  templateUrl: './tab-profile.component.html',
  styleUrl: './tab-profile.component.scss'
})
export class TabProfileComponent {

}
