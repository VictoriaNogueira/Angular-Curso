import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']//,
  //outputs: ['mudouValor']
})
export class OutputPropertyComponent {

  @Input() valor: number = 0;                                                                                              

  @Output() mudouValor = new EventEmitter();

  //versão antiga do angular: @ViewChild('campoInput') campoValorInput: HTMLElement
  @ViewChild('campoInput', {static: false}) campoValorInput!: ElementRef

  incrementa(){  
    this.valor++;  
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){    
    this.valor--;
    //this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }


}
