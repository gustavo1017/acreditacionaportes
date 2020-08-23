import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Elemento } from '../model/elemento.model'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BusquedasolicitudService {

  constructor(private http: HttpClient) { }

  obtenerResumenSolicitudAfiliado(): Observable <Elemento[]>{
    const obtenerResumenSolicitudAfiliadoRequest = {
      "numSolicitud": "AVLAMNT000800000025917"
    }
    return this.http.post<Elemento[]>(environment.url_api,obtenerResumenSolicitudAfiliadoRequest);
  }

}
