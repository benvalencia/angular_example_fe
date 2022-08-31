import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCounterComponent } from './contact-counter/contact-counter.component';
import {BoxElementsModule} from '../../modules/box-elements/box-elements.module';

@NgModule({
  declarations: [
    ContactCounterComponent
  ],
  exports: [
    ContactCounterComponent
  ],
  imports: [
    CommonModule,
    BoxElementsModule
  ]
})
export class ContactWidgetsModule { }
