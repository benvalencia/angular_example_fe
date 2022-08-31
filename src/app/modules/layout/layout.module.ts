import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {TranslateModule} from '@ngx-translate/core';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import {ButtonElementsModule} from '../../shared/modules/button-elements/button-elements.module';

@NgModule({
  declarations: [LayoutComponent, MenuComponent, SubMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ButtonElementsModule,
  ],
  exports: [
    LayoutComponent,
    MenuComponent
  ]
})
export class LayoutModule { }
