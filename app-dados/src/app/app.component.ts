import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app-dados';
  dadoIzquierda = '../assets/imagenes/dado1.png';
  dadoDerecha = '../assets/imagenes/dado4.png'; 
  numero1 = 1;
  numero2 = 2;

  tirarDados():void   {
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
   
    this.dadoIzquierda = '../assets/imagenes/dado' + this.numero1 + '.png';
    this.dadoDerecha = '../assets/imagenes/dado' + this.numero2 + '.png';
  }
}
