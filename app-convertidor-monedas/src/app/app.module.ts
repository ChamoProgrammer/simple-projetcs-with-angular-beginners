import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { ConvertidorComponent } from './componentes/convertidor/convertidor.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    ConvertidorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
