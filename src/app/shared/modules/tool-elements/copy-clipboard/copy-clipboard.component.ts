import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-copy-clipboard',
  templateUrl: './copy-clipboard.component.html',
  styleUrls: ['./copy-clipboard.component.scss']
})
export class CopyClipboardComponent implements OnInit {

  @Input() url: string | any;
  @Output() copied = new EventEmitter();

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
  }

  copyToClickBoard(): void {
    this.clipboard.copy(this.url);
    this.copied.emit();
  }
}
