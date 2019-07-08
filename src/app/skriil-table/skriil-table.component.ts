import {Component, ContentChild, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef} from '@angular/core';
import {SkriiLFormFieldDirective} from './directives/skriil-form-field.directive';
import {SkriilFormDirective} from './directives/skriil-form.directive';
import {SkriilTableColumnDirective} from './directives/skriil-table-column.directive';
import {Services} from '@angular/core/src/view/types';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

export class SkriilTableContext {
  showEdit = true;
  tableClass = 'table';
  service: any;
  heading: string;
  formGroup: FormGroup;
  formIds: string[];
}

@Component({
  selector: 'skriil-table',
  templateUrl: './skriil-table.component.html',
})
export class SkriilTableComponent implements OnInit {
  public tableContext = new SkriilTableContext();
  public items$: Observable<any[]>;
  public selectedItem: any;
  public new = false;

  @ContentChild(SkriilFormDirective, {read: TemplateRef}) form: SkriilFormDirective;
  @ContentChildren(SkriilTableColumnDirective, {read: TemplateRef}) tableColumns: QueryList<SkriilTableColumnDirective>;

  @Input('tableContext')
  set _tableContext(context: SkriilTableContext | undefined) {
    if (context) {
      this.tableContext = context;
      this.items$ = this.tableContext.service.getAll();
    }
  }
  @Output() selectItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.tableContext.service.save(this.selectedItem);
    this.selectedItem = undefined;
  }

  dismiss() {
    this.selectedItem = undefined;
  }

  addItem() {

  }

  editItem(item: any) {
    this.selectedItem = item;
    this.selectItem.emit(item);
  }

}
