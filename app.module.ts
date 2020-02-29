import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PlaceAppointmentComponent } from './place-appointment/place-appointment.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';



import { ApplicantViewComponent } from './applicant-view/applicant-view.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewAppointmentComponent,
    ContactUsComponent,
    PlaceAppointmentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
