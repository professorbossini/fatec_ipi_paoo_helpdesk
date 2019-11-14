import { Injectable } from '@angular/core';
import { Fila } from './model/fila';

@Injectable({
  providedIn: 'root'
})
export class FilaService {

  filas: Fila[] = [
    {id: 1, nome: 'Telefonia'},
    {id: 2, nome: 'Redes'},
    {id: 3, nome: 'Computadores'}
  ]

  adicionarFila (fila: Fila): void{
    this.filas.push(fila);
  }
  getFilas (): Fila[]{
    return this.filas;
  }

  constructor() { }
}
