import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = '127.0.0.1:5000';

@Injectable()
export class BuscaService{

    listaPergunta:any [] = [
        {subTitulo:"carro de velocidade", texto:"O carro corre muito gente!"},
        {subTitulo:"carro de velocidade", texto:"O carro corre muito gente!"},
        {subTitulo:"carro de velocidade", texto:"O carro corre muito gente!"},
        {subTitulo:"carro de velocidade", texto:"O carro corre muito gente!"},
        {subTitulo:"carro de velocidade", texto:"O carro corre muito gente!"},
        {subTitulo:"carro de velocidade", texto:"O carro corre muito gente!"},
        {subTitulo:"carro de velocidade", texto:"O carro corre muito gente!"},
        {subTitulo:"carro de velocidade", texto:"O carro corre muito gente!"},
        {subTitulo:"carro de velocidade", texto:"O carro corre muito gente!"},
        {subTitulo:"carro de velocidade", texto:"O carro corre muito gente!"}
    ];

    constructor(private http:HttpClient){}

    fazerpergunta(pergunta:string){
        return this.http.post<any>(`${API}/pesquisa`, {pergunta});
    }

    getLista(){
        return this.listaPergunta;
    }

}