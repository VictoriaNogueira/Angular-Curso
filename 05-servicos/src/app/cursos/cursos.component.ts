import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursosService]
})
export class CursosComponent {

  cursos: string[] = [];
  //cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    //this.cursosService = new CursosService();   
    // A injeção de dependencia cria essa instancia automaticamente para a gente.
    //this.cursosService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    //this.cursosService.emitirCursoCriado.subscribe(

    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    );
       
      //curso => console.log(curso) //ecma script2015 arrow function (faz a mesma coisa que a função abaixo)
      
      // function(curso){
      //   console.log(curso);
      // }
    //)
  }

}

