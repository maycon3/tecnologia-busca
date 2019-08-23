import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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


    getLista(){
        return this.listaPergunta;
    }
}