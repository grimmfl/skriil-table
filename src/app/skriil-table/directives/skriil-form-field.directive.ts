import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[skriilFormField]'
})
export class SkriiLFormFieldDirective {
  private hasView = false;

  @Input()
  set skriiLFormField(value: any) {
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
