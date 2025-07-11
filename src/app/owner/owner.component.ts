import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OwnerTopBarComponent } from '../owner-top-bar/owner-top-bar.component';
import { OwnerSideBarComponent } from '../owner-side-bar/owner-side-bar.component';
import { OwnerEditCommunityComponent } from '../owner-edit-community/owner-edit-community.component';

@Component({
  selector: 'app-owner',
  imports: [RouterOutlet,RouterLink,OwnerTopBarComponent,OwnerSideBarComponent,OwnerEditCommunityComponent],
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent {

}
