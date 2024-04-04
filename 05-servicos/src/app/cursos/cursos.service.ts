import { EventEmitter, Injectable } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable()
//Significa que essa classe é injetável (recebe de outra)


export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'Java', 'PHP'];
    
    constructor(private logService: LogService){
        
    }

    getCursos() {
        this.logService.consoleLog('Obtendo lista de cursos');
        return this.cursos;
    }

    addCurso(curso:string){
        //this.logService.consolelog('Criando um novo curso ' + curso); (jeito antigo)
        this.logService.consoleLog(`Criando um novo curso ${curso}`); //jeito mais atual ES2015
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);

    }
}
