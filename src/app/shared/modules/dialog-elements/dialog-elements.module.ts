import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogSideComponent } from './dialog-side/dialog-side.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    DialogSideComponent
  ],
  exports: [
    DialogSideComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class DialogElementsModule { }
