import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';
import {SkriiLFormFieldDirective} from '../directives/skriil-form-field.directive';
import {Input} from '@angular/core';

@Component({
  selector: 'skriil-form-field',
  template: `
    <div class="form-group">
      <label for="input">{{ label }}</label>
      <ng-container *ngTemplateOutlet="formField" id="input"></ng-container>
    </div>
  `,
})
export class SkriilFormFieldComponent implements OnInit {
  @ContentChild(SkriiLFormFieldDirective, {read: TemplateRef}) formField: SkriiLFormFieldDirective;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
