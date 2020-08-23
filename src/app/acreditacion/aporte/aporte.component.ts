import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-aporte',
  templateUrl: './aporte.component.html',
  styleUrls: ['./aporte.component.css']
})
export class AporteComponent implements OnInit {
  public iconoFlechaMostrarDatosAfiliado: String;
  public url = '';
  constructor() {
    this.url = 'assets/imagen/test.pdf';
    this.iconoFlechaMostrarDatosAfiliado = "fas fa-angle-up"
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

}
