import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RidersComponent} from './pages/riders/riders.component';
import {DriversComponent} from './pages/drivers/drivers.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {VehiclesComponent} from './pages/vehicles/vehicles.component';
import {DocumentsComponent} from './pages/documents/documents.component';
import {RatesComponent} from './pages/rates/rates.component';

const routes: Routes = [
  { path:  '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path:  'dashboard', component:  DashboardComponent},
  { path:  'riders', component:  RidersComponent},
  { path:  'drivers', component:  DriversComponent},
  { path:  'vehicles', component:  VehiclesComponent},
  { path:  'documents', component:  DocumentsComponent},
  { path:  'rates', component:  RatesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
