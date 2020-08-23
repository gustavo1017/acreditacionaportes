import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from '../../environments/environment'
import { Solicitud } from "../model/solicitud.model"
@Injectable({
  providedIn: 'root'
})
export class BusquedaSolicitudService {

  constructor( private http: HttpClient ) { }


  obtenerResumenSolicitudAfiliado(): Observable <Solicitud>{
    const obtenerResumenSolicitudAfiliadoRequest = {
      "numSolicitud": "AVLAMNT000800000025917"
    }
    return this.http.post<Solicitud>(environment.url_api+'/ESB/RSBusquedaSolicitud/obtenerResumenSolicitudAfiliado',obtenerResumenSolicitudAfiliadoRequest);
  }
}
