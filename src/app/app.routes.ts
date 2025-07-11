import { Routes } from '@angular/router';
import { OwnerEditCommunityComponent } from './owner-edit-community/owner-edit-community.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerAddUnitComponent } from './owner-add-unit/owner-add-unit.component';

export const routes: Routes = [


    { path: 'owner', component: OwnerComponent, title:"Owner Home"},

    { path: 'EditCommunity', component: OwnerEditCommunityComponent, title:"Edit Community"},

    { path: 'AddUnit', component: OwnerAddUnitComponent, title:"Add Unit"},

    { path: '', component: OwnerComponent, title:"Owner Home"},

];
