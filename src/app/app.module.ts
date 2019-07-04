import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkriilTableComponent } from './skriil-table/skriil-table.component';
import { SkriiLFormFieldDirective } from './skriil-table/directives/skriil-form-field.directive';
import { SkriilFormFieldComponent } from './skriil-table/skriil-form-field/skriil-form-field.component';
import { SkriilFormDirective } from './skriil-table/directives/skriil-form.directive';
import { SkriilTableItemDirective } from './skriil-table/directives/skriil-table-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    SkriilTableComponent,
    SkriiLFormFieldDirective,
    SkriilFormFieldComponent,
    SkriilFormDirective,
    SkriilTableItemDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
