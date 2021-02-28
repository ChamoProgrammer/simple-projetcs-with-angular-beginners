import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosComponent } from './componentes/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './componentes/ingresar-presupuesto/ingresar-presupuesto.component';
import { IngresarGastosComponent } from './componentes/ingresar-gastos/ingresar-gastos.component';
import { ListarGastosComponent } from './componentes/listar-gastos/listar-gastos.component';
// import { PresupuestoComponent } from './servicios/presupuesto/presupuesto.component';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngresarPresupuestoComponent,
    IngresarGastosComponent,
    ListarGastosComponent
    // PresupuestoComponent
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
