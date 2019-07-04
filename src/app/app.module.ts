import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkriilTableComponent } from './skriil-table/skriil-table.component';
import { SkriiLFormFieldDirective } from './skriil-table/directives/skriil-form-field.directive';
import { SkriilFormFieldComponent } from './skriil-table/skriil-form-field/skriil-form-field.component';
import { SkriilFormDirective } from './skriil-table/directives/skriil-form.directive';
import { SkriilTableColumnDirective } from './skriil-table/directives/skriil-table-column.directive';

@NgModule({
  declarations: [
    AppComponent,
    SkriilTableComponent,
    SkriiLFormFieldDirective,
    SkriilFormFieldComponent,
    SkriilFormDirective,
    SkriilTableColumnDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
