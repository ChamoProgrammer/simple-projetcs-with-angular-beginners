import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GastosComponent } from './componentes/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './componentes/ingresar-presupuesto/ingresar-presupuesto.component';

const routes: Routes = [
  {path: '', redirectTo: '/ingresar-presupuesto', pathMatch: 'full'},
  {path: 'ingresar-presupuesto', component: IngresarPresupuestoComponent},
  {path: 'gastos', component: GastosComponent},
  {path: '**', redirectTo: '/ingresar-presupuesto', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
