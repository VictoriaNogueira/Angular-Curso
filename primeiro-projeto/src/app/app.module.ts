import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    //todos os componentes, diretivas e pipes qua vamos usar no module
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent
  ],
  imports: [
    //outros modulos que serão utilizados nesse modulo
    BrowserModule,
    CursosModule
  ],
  providers: [],
  //serviços disponiveis p/ todos os componentes

  bootstrap: [AppComponent]
  //traz o componente container da aplicação; o primeiro a ser carregado qnd iniciamos a app; SPA: single page aplication
  // configurar rotas, header, footer, etc...
})
export class AppModule { }
