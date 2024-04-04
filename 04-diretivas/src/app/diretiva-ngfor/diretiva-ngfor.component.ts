import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.scss']
})
export class DiretivaNgforComponent {

  cursos: string[] = ["Angular", "Java", "PHP"]

  ngOnInit(){
    for (let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }
  }
  
}
