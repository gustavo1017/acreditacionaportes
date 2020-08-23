import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Elemento } from '../model/elemento.model'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor( private http: HttpClient) { }

  obtenerCatalogo(): Observable <Elemento[]>{
    const obtenerCatalogoRequest = {
      "codigoCatalogo": "CAT_TIPO_DOCU_IDEN"
    }
    return this.http.post<Elemento[]>(environment.url_api+'/ESB/RSCatalogo/obtenerCatalogo',obtenerCatalogoRequest);
  }



}
