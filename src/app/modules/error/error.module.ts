import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';



@NgModule({
  declarations: [NotFoundComponent, NotAllowedComponent],
  imports: [
    CommonModule
  ]
})
export class ErrorModule { }
