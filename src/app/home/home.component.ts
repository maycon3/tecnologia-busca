import { Component, OnInit } from '@angular/core';
import { FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

perguntaForm: any;
pergunta:string;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.createForms();
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

}
