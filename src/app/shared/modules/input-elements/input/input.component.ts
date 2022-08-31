import {Component, forwardRef, Input, OnInit} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputControlDirective } from '../input-control.directive';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})

export class InputComponent extends InputControlDirective implements OnInit {
  @Input() label?: string;
  @Input() name?: string;
  @Input() step?: number;
  @Input() required = false;
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() error = false;
  @Input() display = true;

  constructor() {
    super();
  }

  ngOnInit(): void {}

  onChange(_val: any): any {}
}
