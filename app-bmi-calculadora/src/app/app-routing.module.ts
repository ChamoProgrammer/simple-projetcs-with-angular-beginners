import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ResultadoComponent } from './componentes/resultado/resultado.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'resultado/:valor', component: ResultadoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
