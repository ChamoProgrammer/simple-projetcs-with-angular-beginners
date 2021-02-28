import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  // peso, edad dinamico
  edad = 25;
  peso = 60;
  // altura dinamico
  altura = 170;
  // genero dinamico
  sexo = 'masculino';

  masculino()   {
    this.sexo = 'masculino';
  }

  femenino()   {
    this.sexo = 'femenino';
  }

  // calcular ruteo
  calcularBMI()  {
    // valores a hacer algunos calculos
    const BMI = this.peso / Math.pow(this.altura / 100, 2);
    this.router.navigate(['/resultado', BMI.toFixed(1)])
  }


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // altura dinamica
  cambiarAltura(event: any)  {
    // console.log(evento.target.value);
    this.altura = event.target.value;
  }

}
