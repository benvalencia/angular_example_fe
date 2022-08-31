import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { authRoutes } from './authentication.routing';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {InputElementsModule} from '../../shared/modules/input-elements/input-elements.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ButtonElementsModule} from '../../shared/modules/button-elements/button-elements.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LayoutComponent, LoginComponent],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    authRoutes,
    FormsModule,
    TranslateModule,
    InputElementsModule,
    MatCheckboxModule,
    ButtonElementsModule,
    MatButtonModule,
  ]
})
export class AuthenticationModule { }
