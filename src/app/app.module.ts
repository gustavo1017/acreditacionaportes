import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentoComponent } from './components/acreditacion/documento/documento.component';
import { AporteComponent } from './components/acreditacion/aporte/aporte.component';
import { NavegacionComponent } from './components/comun/navegacion/navegacion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ResumenComponent } from './components/acreditacion/resumen/resumen.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DocumentoComponent,
    AporteComponent,
    NavegacionComponent,
    ResumenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
