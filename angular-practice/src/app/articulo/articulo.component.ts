import { Component } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {
  
  numeroDeArticulo: number = 1;
  nombreDeArticulo: string = 'Aprendiendo Angular';
  allowNewTitle: boolean = true;
  createTitleStatus: string = 'Ningún título creado';
  titleName: string = '';
  titleCreated: boolean = false;

  getName() {
    return this.nombreDeArticulo;
  }

  constructor() {
    
    setTimeout(()=>{
      this.allowNewTitle = false;
    }, 2000)

    this.createTitleStatus = Math.random() > 0.5 ? 'Libro' : 'Película'

  }

  onCreateTitle() {
    if(this.titleName != '') {
      this.createTitleStatus = 'Nuevo título creado.' + ' El título es ' + this.titleName;
      this.titleCreated = true;
    } else {
      this.titleCreated = false;
    }
  }

  onUpdateInputName(event: Event) {
    this.titleName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.createTitleStatus === 'Libro' ? 'green' : 'blue'
  }

}
