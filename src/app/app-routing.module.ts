import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuscaComponent } from './busca/busca.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'buscaDocumento', component:BuscaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
