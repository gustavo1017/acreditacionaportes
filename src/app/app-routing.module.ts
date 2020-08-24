import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentoComponent } from './components/acreditacion/documento/documento.component';
import { AporteComponent } from './components/acreditacion/aporte/aporte.component';
import { ResumenComponent } from './components/acreditacion/resumen/resumen.component';


const routes: Routes = [
  { path: '', redirectTo: '/documento', pathMatch: 'full' },
  { path: 'documento', component: DocumentoComponent },
  { path: 'aporte', component: AporteComponent },
  { path: 'resumen', component: ResumenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
