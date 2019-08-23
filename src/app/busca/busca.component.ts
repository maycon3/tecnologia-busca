import { Component, OnInit, Input } from '@angular/core';

import { BuscaService } from './busca.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  @Input() pergunta:string;
  listaDePerguntas: any [] = [];
  rows:any [] = [];

  constructor(private buscaService:BuscaService) { }

  ngOnInit() {
    this.listaDePerguntas = this.buscaService.getLista();
    this.rows = this.groupColumns(this.listaDePerguntas);
  }


  groupColumns(lista:any) {
    const newRows = [];

    for(let index = 0; index < lista.length; index+=3) {
        newRows.push(lista.slice(index, index + 3));
    }
    return newRows;
  }

  

}
