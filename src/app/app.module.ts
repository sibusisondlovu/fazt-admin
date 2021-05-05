// core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

// components
import { RidersComponent } from './pages/riders/riders.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// misc
import {environment} from '../environments/environment';
import { DriversComponent } from './pages/drivers/drivers.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { RatesComponent } from './pages/rates/rates.component';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    RidersComponent,
    DashboardComponent,
    DriversComponent,
    VehiclesComponent,
    DocumentsComponent,
    RatesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
