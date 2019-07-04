import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[skriilForm]'
})
export class SkriilFormDirective {
  private hasView = false;

  @Input()
  set skriilForm(value: any) {
    if (this.hasView) {
      this.viewContainer.clear();
      this.hasView = true;
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = false;
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) { }


}
