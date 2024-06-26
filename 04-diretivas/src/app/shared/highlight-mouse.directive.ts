import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color', 
    //   'yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'red'
    // );
    this.backgroundColor = 'red';
  }

  // @HostBinding('style.backgroundColor') backgroundColor:string;  
  // @HostBinding('style.backgroundColor') backgroundColor: string = '';
  @HostBinding('style.backgroundColor') get setColor() {
    //CÓDIGO EXTRA;
    return this.backgroundColor;
  }
  private backgroundColor: string = '';

  constructor(    
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2
  ) { }

}
