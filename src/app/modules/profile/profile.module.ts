import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {profileRoutes} from './profile.routing';
import {BoxElementsModule} from '../../shared/modules/box-elements/box-elements.module';
import {TranslateModule} from '@ngx-translate/core';
import {InputElementsModule} from '../../shared/modules/input-elements/input-elements.module';
import {FormsModule} from '@angular/forms';
import {ButtonElementsModule} from "../../shared/modules/button-elements/button-elements.module";

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    profileRoutes,
    BoxElementsModule,
    TranslateModule,
    InputElementsModule,
    FormsModule,
    ButtonElementsModule
  ]
})
export class ProfileModule { }
