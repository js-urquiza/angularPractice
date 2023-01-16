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
  }

  onCreateTitle() {
    this.createTitleStatus = 'Nuevo título creado.' + ' El título es ' + this.titleName;
    this.titleCreated = true;
  }

  onUpdateInputName(event: Event) {
    this.titleName = (<HTMLInputElement>event.target).value;
  }

}
