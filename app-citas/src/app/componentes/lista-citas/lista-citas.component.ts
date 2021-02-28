import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {
  @Input() listadoCitas: any;
  @Output() eliminarCitas = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminarCita(index: number)  {
    this.eliminarCitas.emit(index)
  }
}
