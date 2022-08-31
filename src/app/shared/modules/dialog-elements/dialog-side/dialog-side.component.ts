import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog-side',
  templateUrl: './dialog-side.component.html',
  styleUrls: ['./dialog-side.component.scss']
})
export class DialogSideComponent implements OnInit {

  @Input() dialogTitle = '';
  @Output() clickClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeBox(): void {
    this.clickClose.emit();
  }
}
