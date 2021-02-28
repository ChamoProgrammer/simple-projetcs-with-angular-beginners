import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { CountEmpleadoComponent } from './componentes/count-empleado/count-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    CountEmpleadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
