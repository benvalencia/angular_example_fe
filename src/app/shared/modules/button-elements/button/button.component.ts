import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
  @Input() label?: string;
  @Input() isSubmitting?: boolean;
  @Input() loading?: boolean;
  @Input() disabled?: boolean;
  @Input() type?: string;
  @Input() loadingColor?: string;
  @Input() buttonStyle = 'default';
  @Input() timeout = 0;

  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() counter: EventEmitter<number> = new EventEmitter<number>();
  // counter = 0;

  ngOnInit(): void {
    if (this.buttonStyle === 'secondary') {
      this.loadingColor = this.loadingColor || '#323c4f';
    }
    if (this.timeout > 0) {
      // init counter
      // this._counter = this.timeout;
      // start count down
      // this.countDown();
    }
  }

  clicked(event: MouseEvent): void {
    event.preventDefault();
    this.onClick.emit(event);
  }

  // get progress(): number {
  //   return this.timeout > 0 ? (this._counter / this.timeout) * 100 : 0;
  // }

  // private countDown(): void {
  //   const interval = setInterval(() => {
  //     if (this._counter > 0) {
  //       // this._counter -= 1;
  //       // this.counter.emit(this._counter);
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  // }
}

