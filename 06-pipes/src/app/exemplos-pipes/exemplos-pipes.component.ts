import { Component } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent {

  livro: any = {
    titulo: 'Learning JavaScript',
    rating: 4.54321,
    numPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glgjpRP'
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro!: string;

  
  addCurso(valor: string){    
    this.livros.push(valor);
  }

  obterCursos(){

    if (this.livros.length === 0 || this.filtro === undefined 
      || this.filtro.trim() === ''){
      return this.livros;
    }
  
    return this.livros.filter((v: string) => {
      if(v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    });
  } 

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 3000)
  });

  
  
  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));

  //valorAsync2 = Observable.interval(2000).map(valor => 'Valor assíncrono 2');




}
