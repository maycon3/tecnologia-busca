import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { HomeComponent } from './home/home.component';
import { BuscaComponent } from './busca/busca.component';
import { BuscaService } from './busca/busca.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BuscaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
