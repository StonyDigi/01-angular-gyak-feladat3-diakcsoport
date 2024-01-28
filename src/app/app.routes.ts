import { Routes } from '@angular/router';
import { DiakcsoportComponent } from './diakcsoport/diakcsoport.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [

    {path: 'home', component: HomepageComponent},
    {path: 'diakcsoport', component: DiakcsoportComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
