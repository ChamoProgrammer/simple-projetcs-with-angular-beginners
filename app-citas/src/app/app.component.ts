import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app-citas';
  listaCitas: any[] = [];

  agregarCita(cita: any)  {
    // console.log(this.listaCitas);
    this.listaCitas.push(cita);
  }

  eliminarCitaListado(index: number)  {
    this.listaCitas.splice(index, 1);
  }
}
