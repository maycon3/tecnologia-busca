import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  @Input() listaDePerguntas: any [] = [];
  @Input() rows: any [] = [];
  

  constructor() { }

  ngOnInit() {
    //this.listaDePerguntas = this.buscaService.getLista();
    //this.rows = this.groupColumns(this.listaDePerguntas);
  }


  

  

}
