import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceAppointmentComponent } from './place-appointment/place-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'con',component:ContactUsComponent},
  {path:'sas',component:ViewAppointmentComponent},
  {path:'plc',component:PlaceAppointmentComponent},
  {path:'add',component:PlaceAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
