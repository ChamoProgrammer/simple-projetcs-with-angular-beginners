import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EURO';
  total = 0;

  // convertir a...
  monedas: string[] = ['USD', 'EURO', 'QTZLS']

  convertir()  {
    switch (this.tengo) {
      case 'USD':
        // algo
        if (this.quiero === 'USD') {
          this.total = this.cantidad;
        }
        else if (this.quiero === 'EURO')  {
          this.total =this.cantidad * 1.22
        }
        else if (this.quiero === 'QTZLS')   {
          this.total = this.cantidad * 7.71
        }
        break;
    
      case 'EURO':
        // algo
            case 'USD':
        // algo
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1,22;
        }
        else if (this.quiero === 'EURO')  {
          this.total =this.cantidad;
        }
        else if (this.quiero === 'QTZLS')   {
          this.total = this.cantidad * 9,48
        }
        break;
    
      case 'QTZLS':
        // algo
            case 'USD':
        // algo
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 7,71
        }
        else if (this.quiero === 'EURO')  {
          this.total =this.cantidad * 9,48
        }
        else if (this.quiero === 'QTZLS')   {
          this.total = this.cantidad;
        }
        break;
    
      default:
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
