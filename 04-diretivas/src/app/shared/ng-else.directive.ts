import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  // Toda vez que o valor do ngElse mudar (pelo input property) o novo valor será setado no template
  @Input() set ngElse(condition:boolean) {
    if(!condition){
      this._viewContainerRef.createEmbeddedView(this._templateRef);      
    } else {
      this._viewContainerRef.clear();
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) {}
}
