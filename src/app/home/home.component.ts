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
listas: any[] = [];

  constructor(
    private formBuilder:FormBuilder,
    private buscaService:BuscaService
  ) { }

  ngOnInit() {
    this.createForms();
  }

  createForms(){
    this.perguntaForm = this.formBuilder.group({
      pergunta:['']
    });
  }

 

  fazPergunta(){
    let perguntaFeita = this.perguntaForm.value;
    this.pergunta = perguntaFeita.pergunta;
    console.log('pergunta do usuario :' + this.pergunta);
    this.buscaService.fazerpergunta(this.pergunta)
      .subscribe(resp=>{
        this.listas = resp;
        console.log(this.listas);
      });

  }

  

}
