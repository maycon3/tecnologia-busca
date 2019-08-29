import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class BuscaService{

  
    constructor(private http:HttpClient){}

    fazerpergunta(data:string){
       return this.http.post<any[]>(`http://127.0.0.1:5000/pesquisa`, {data});
    }



}