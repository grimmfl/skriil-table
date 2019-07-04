import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {SkriiLFormFieldDirective} from './directives/skriil-form-field.directive';
import {SkriilFormDirective} from './directives/skriil-form.directive';
import {SkriilTableItemDirective} from './directives/skriil-table-item.directive';

export class SkriilTableContext {
  showEdit = true;
  tableClass = 'table';
  data = [];
}

@Component({
  selector: 'skriil-table',
  templateUrl: './skriil-table.component.html',
})
export class SkriilTableComponent implements OnInit {
  @ContentChild(SkriilFormDirective, {read: TemplateRef}) form: SkriilFormDirective;
  @ContentChild(TemplateRef) tableItem;
  @Input() tableContext: SkriilTableContext = new SkriilTableContext();

  constructor() { }

  ngOnInit() {
  }

}
