import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../../services/catalogo.service';
import { Elemento } from 'src/app/model/elemento.model';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {
  public url = '';
  public pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  public iconoFlechaMostrarMotivoTramite: String;
  public iconoFlechaMostrarDatosSolicitud: String;
  public iconoFlechaMostrarDatosAfiliado: String;
  public elementos: Elemento[];
  onpPasosActivo: string;
  
  constructor(private catalogoService: CatalogoService) {
    this.url = 'assets/imagen/test.pdf';
    this.iconoFlechaMostrarMotivoTramite = "fas fa-angle-up"
    this.iconoFlechaMostrarDatosSolicitud = "fas fa-angle-up"
    this.iconoFlechaMostrarDatosAfiliado = "fas fa-angle-up"
    this.elementos = [];
    this.onpPasosActivo = 'onpPasosActivo';
   }

  ngOnInit(): void {
  }

  mostrarMotivoTramite(){
    if(this.iconoFlechaMostrarMotivoTramite.substr(this.iconoFlechaMostrarMotivoTramite.length-2,this.iconoFlechaMostrarMotivoTramite.length) !== 'up' ){
      this.iconoFlechaMostrarMotivoTramite = "fas fa-angle-up"
    }else{
      this.iconoFlechaMostrarMotivoTramite = "fas fa-angle-down"
    }
  }

  mostrarDatosSolicitud(){
    if(this.iconoFlechaMostrarDatosSolicitud.substr(this.iconoFlechaMostrarDatosSolicitud.length-2,this.iconoFlechaMostrarDatosSolicitud.length) !== 'up' ){
      this.iconoFlechaMostrarDatosSolicitud = "fas fa-angle-up"
    }else{
      this.iconoFlechaMostrarDatosSolicitud = "fas fa-angle-down"
    }
  }

  mostrarDatosAfiliado(){
    if(this.iconoFlechaMostrarDatosAfiliado.substr(this.iconoFlechaMostrarDatosAfiliado.length-2,this.iconoFlechaMostrarDatosAfiliado.length) !== 'up' ){
      this.iconoFlechaMostrarDatosAfiliado = "fas fa-angle-up"
    }else{
      this.iconoFlechaMostrarDatosAfiliado = "fas fa-angle-down"
    }
  }

  obtenerCatalogo(){
    this.catalogoService.obtenerCatalogo().subscribe( elementos => {
      this.elementos = elementos;
    });
  }

}
