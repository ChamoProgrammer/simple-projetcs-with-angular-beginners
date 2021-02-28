import { Component, OnInit } from '@angular/core';
import { tarea } from 'src/app/modelos/tarea';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: tarea[] = []
  nombreTarea = ''
  constructor() { }

  ngOnInit(): void {
  }
  agrearTarea()       {
    //crear un objeto tarea
    const tarea: tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    //agregar el objeto tarea al array
    this.listaTareas.push(tarea);
    //reset form
    this.nombreTarea = '';
  }

  // eliminar tarea
  eliminarTarea(index: number)  {
    this.listaTareas.splice(index, 1)
  }

  // actualizar tarea
  actualizarTarea(index: number, tarea: tarea)  {
    this.listaTareas[index].estado = !tarea.estado
  }

}
