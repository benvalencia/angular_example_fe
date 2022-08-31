import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import {TranslateModule} from '@ngx-translate/core';
import { ButtonUserComponent } from './button-user/button-user.component';
import {RouterModule} from '@angular/router';
import {ClickOutDirective} from '../../../core/directives/click-out.directive';
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [ButtonComponent, ButtonUserComponent, ClickOutDirective],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    MatMenuModule,
  ],
  exports: [
    ButtonComponent,
    ButtonUserComponent,
    ClickOutDirective
  ]
})
export class ButtonElementsModule { }
