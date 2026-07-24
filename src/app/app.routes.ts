import { Routes } from '@angular/router';
import { Motos } from './features/motos/motos';

export const routes: Routes = [
    { path: '', redirectTo: 'motos', pathMatch: 'full' },
    {path:'motos', component:Motos}
];
