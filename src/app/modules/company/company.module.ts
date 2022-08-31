import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { companyRoutes } from './company.routing';
import { FormsModule } from '@angular/forms';
import { InputElementsModule } from '../../shared/modules/input-elements/input-elements.module';
import { TranslateModule } from '@ngx-translate/core';
import {BoxElementsModule} from '../../shared/modules/box-elements/box-elements.module';
import { LayoutComponent } from './layout/layout.component';
import { CompaniesAdminComponent } from './companies-admin/companies-admin.component';
import {ButtonElementsModule} from '../../shared/modules/button-elements/button-elements.module';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {DialogElementsModule} from '../../shared/modules/dialog-elements/dialog-elements.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ToolElementsModule} from '../../shared/modules/tool-elements/tool-elements.module';

@NgModule({
  declarations: [
    CompanyComponent,
    LayoutComponent,
    CompaniesAdminComponent
  ],
  imports: [
    CommonModule,
    companyRoutes,
    FormsModule,
    InputElementsModule,
    TranslateModule,
    BoxElementsModule,
    ButtonElementsModule,
    MatTableModule,
    MatSortModule,
    DialogElementsModule,
    MatPaginatorModule,
    ToolElementsModule,
  ]
})
export class CompanyModule { }
