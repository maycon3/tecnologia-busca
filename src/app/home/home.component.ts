import { Component, OnInit } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { BuscaService } from '../busca/busca.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

perguntaForm: any;
pergunta:string;
rows:any [] = [];
listaDePerguntas: any[] = [];

  constructor(
    private formBuilder:FormBuilder,
    private buscaService:BuscaService
  ) { }

  ngOnInit() {
    this.createForms();
    this.listaDePerguntas = this.buscaService.getLista();
    this.rows = this.groupColumns(this.listaDePerguntas);
  }

  createForms(){
    this.perguntaForm = this.formBuilder.group({
      pergunta:['']
    });
  }

  pegaPergunta(){
    let perguntaFeita = this.perguntaForm.value;
    this.pergunta = perguntaFeita.pergunta;
  }

  //fazPergunta(){
   // this.buscaService.fazerpergunta(this.pergunta).subscribe(resposta =>{
     // this.listaDePerguntas = resposta;
     // this.rows = this.groupColumns(this.listaDePerguntas);
    //});
  //}

  groupColumns(lista:any) {
    const newRows = [];

    for(let index = 0; index < lista.length; index+=3) {
        newRows.push(lista.slice(index, index + 3));
    }
    return newRows;
  }

}
