import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {
 
  public iconoFlechaMostrarMotivoTramite: String;
  
  constructor() {

    this.iconoFlechaMostrarMotivoTramite = "fas fa-angle-down"
   }

  ngOnInit(): void {
  }

  mostrarMotivoTramite(){
    if(this.iconoFlechaMostrarMotivoTramite.substr(this.iconoFlechaMostrarMotivoTramite.length-2,this.iconoFlechaMostrarMotivoTramite.length) === 'up' ){
      this.iconoFlechaMostrarMotivoTramite = "fas fa-angle-down"
    }else{
      this.iconoFlechaMostrarMotivoTramite = "fas fa-angle-up"
    }
    
  }

}
