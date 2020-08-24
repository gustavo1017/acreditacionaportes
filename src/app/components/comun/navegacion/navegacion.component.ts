import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  @Input() activeAporte: string;
  @Input() activeDocumento: string;
  @Input() activeResumen: string;
  onpPasosActivo: string;
  constructor() {
   }

  ngOnInit(): void {
  }

}
