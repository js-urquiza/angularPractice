import { Component } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {
  numeroDeArticulo: number = 1;
  nombreDeArticulo: string = 'Aprendiendo Angular'

  getName() {
    return this.nombreDeArticulo;
  }
}
