import { Component, OnInit, Input } from '@angular/core';
import { Perguntas } from '../home/perguntas';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  @Input() listas:any[] = [];
  
  
  constructor() { }

  ngOnInit() {}

 

  

  

}
