import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import {settingsRoutes} from './settings.routing';
import {BoxElementsModule} from '../../shared/modules/box-elements/box-elements.module';
import {TranslateModule} from '@ngx-translate/core';
import {InputElementsModule} from '../../shared/modules/input-elements/input-elements.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    settingsRoutes,
    BoxElementsModule,
    TranslateModule,
    InputElementsModule,
    FormsModule
  ]
})
export class SettingsModule { }
