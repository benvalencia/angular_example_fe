import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyClipboardComponent } from './copy-clipboard/copy-clipboard.component';



@NgModule({
  declarations: [
    CopyClipboardComponent
  ],
  exports: [
    CopyClipboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToolElementsModule { }
