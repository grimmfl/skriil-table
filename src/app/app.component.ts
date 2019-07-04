import { Component } from '@angular/core';
import {SkriilTableContext} from './skriil-table/skriil-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tableContext: SkriilTableContext = {
    showEdit: true,
    tableClass: 'table table-dark',
    service: undefined,
  };
}
