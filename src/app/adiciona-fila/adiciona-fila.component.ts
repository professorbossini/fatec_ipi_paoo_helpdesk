import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adiciona-fila',
  templateUrl: './adiciona-fila.component.html',
  styleUrls: ['./adiciona-fila.component.scss']
})
export class AdicionaFilaComponent implements OnInit {

  nomeFila: string;
  
  constructor() { }

  ngOnInit() {
  }
  
  adicionarFila (): void{
    if (this.nomeFila){
      window.alert ("Fila adicionada com sucesso")
    }
    else{
      window.alert ("Digite o nome da fila")
    }
  }

}
