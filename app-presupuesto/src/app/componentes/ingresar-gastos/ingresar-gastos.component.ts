import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/servicios/presupuesto.service';

@Component({
  selector: 'app-ingresar-gastos',
  templateUrl: './ingresar-gastos.component.html',
  styleUrls: ['./ingresar-gastos.component.css']
})
export class IngresarGastosComponent implements OnInit {
nombreGasto: string;
cantidad: number;
formularioCorrecto: boolean;
textoIncorrecto: string;

  constructor(private _presupuestoService: PresupuestoService) { 
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioCorrecto = false;
    this.textoIncorrecto = '';
  }

  ngOnInit(): void {
  }

  agregarGasto()  {
    if (this.cantidad > this._presupuestoService.restante) {
      this.formularioCorrecto = true;
      this.textoIncorrecto = 'cantidad ingresada es mayor al restante ';
      return
    }


    if (this.nombreGasto == '' || this.cantidad <= 0) {
      this.formularioCorrecto = true;
      this.textoIncorrecto = 'cantidad ingresada es mayor al restante ';
    }
    else  {
      // creamos el objeto
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      }
      // enviiamos el objeto al los suscriptores con submit

      // reseteamos formularios
      this.formularioCorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }

}
