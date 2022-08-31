import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import {clientsRoutes} from './clients.routing';
import {BoxElementsModule} from '../../shared/modules/box-elements/box-elements.module';
import {MatTableModule} from '@angular/material/table';
import { WorkersComponent } from './workers/workers.component';
import { LayoutComponent } from './layout/layout.component';
import {ButtonElementsModule} from '../../shared/modules/button-elements/button-elements.module';
import {InputElementsModule} from '../../shared/modules/input-elements/input-elements.module';
import {DialogElementsModule} from '../../shared/modules/dialog-elements/dialog-elements.module';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    ContactsComponent,
    WorkersComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    clientsRoutes,
    BoxElementsModule,
    MatTableModule,
    ButtonElementsModule,
    InputElementsModule,
    DialogElementsModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class ClientsModule { }
