import { Injectable } from '@angular/core';
import { PlaceAppointment } from '../models/place-appointment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppointementService {
  baseUrl:string;

  constructor(private httpClient:HttpClient) {
    this.baseUrl="http://localhost:3012/PlaceAppointment";
   }
   getAll():Observable<PlaceAppointment[]>{
     return this.httpClient.get<PlaceAppointment[]>(this.baseUrl);
   }
   add(pa:PlaceAppointment):Observable<PlaceAppointment>{
    return this.httpClient.post<PlaceAppointment>(this.baseUrl,pa);
   }
}
