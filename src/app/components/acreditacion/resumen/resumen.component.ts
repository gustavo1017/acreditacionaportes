import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  public iconoFlechaMostrarDatosAfiliado: String;
  public iconoFlechaMostrarResumenAcreditacion: String;
  public url = '';
  onpPasosActivo: string;
  constructor() {
    this.url = 'assets/imagen/test.pdf';
    this.iconoFlechaMostrarDatosAfiliado = "fas fa-angle-up"
    this.iconoFlechaMostrarResumenAcreditacion = "fas fa-angle-up"
    this.onpPasosActivo = 'onpPasosActivo';
   }

  ngOnInit(): void {
  }

  mostrarDatosAfiliado(){
    if(this.iconoFlechaMostrarDatosAfiliado.substr(this.iconoFlechaMostrarDatosAfiliado.length-2,this.iconoFlechaMostrarDatosAfiliado.length) !== 'up' ){
      this.iconoFlechaMostrarDatosAfiliado = "fas fa-angle-up"
    }else{
      this.iconoFlechaMostrarDatosAfiliado = "fas fa-angle-down"
    }
  }

  mostrarResumenAcreditacion(){
    if(this.iconoFlechaMostrarResumenAcreditacion.substr(this.iconoFlechaMostrarResumenAcreditacion.length-2,this.iconoFlechaMostrarResumenAcreditacion.length) !== 'up' ){
      this.iconoFlechaMostrarResumenAcreditacion = "fas fa-angle-up"
    }else{
      this.iconoFlechaMostrarResumenAcreditacion = "fas fa-angle-down"
    }
  }

}
