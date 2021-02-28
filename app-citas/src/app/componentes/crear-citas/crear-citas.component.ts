import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent implements OnInit {
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';
  formIncorrecto = false;
  @Output() nuevaCita = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  // agg cita
  agregarCita()  {
    if (this.nombre == ''  || this.fecha == ''  || this.hora == ''  || this.sintomas == '') {
      this.formIncorrecto = false;
      return
    }
    this.formIncorrecto = false;

    // creamos objeto para emplearselo al padre
    const cita = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    console.log(cita);
    this.nuevaCita.emit(cita);
    this.reiniciarCampos;
    }
    
    reiniciarCampos() {
      this.nombre= '';
      this.fecha= '';
      this.hora= '';
      this.sintomas= '';
  }

}
