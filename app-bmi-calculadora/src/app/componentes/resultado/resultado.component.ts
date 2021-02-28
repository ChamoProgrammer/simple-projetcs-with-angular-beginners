import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  resultado: string;
  interpretacion: string;

  bmi: number;
  constructor(private route: ActivatedRoute) { 
    // console.log(this.bmi)
    this.resultado = '';
    this.interpretacion = '';
    // console.log(+route.snapshot.paramMap.get('valor'))
    this.bmi = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado()  {
    if (this.bmi >= 25) {
      this.resultado = 'exceso de peso';
      this.interpretacion = 'tienes un peso normal corporal superior. intente hacer mas ejercicio';
    }
    else if (this.bmi >= 18.5)   {
      this.resultado = 'normal';
      this.interpretacion = 'tienes un peso corporal normal. ¡BUEN TRABAJO!';
    }
    else  {
      this.resultado = 'bajo peso';
      this.interpretacion = 'tienes un peso corporal mas bajo de lo normal. puedes comer un poco mas.'
    }
  };

}
