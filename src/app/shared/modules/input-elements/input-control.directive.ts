import { Directive, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
// import { ElaEntity } from 'ela';

@Directive({
  selector: '[appInputControl]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputControlDirective),
      multi: true
    }
  ]
})

export abstract class InputControlDirective implements ControlValueAccessor {
  @Input() _value: any;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  public touched = false;
  private firstChange = true;

  get value() {
    return this._value;
  }

  set value(val) {
    // isolate if necessary
    // val instanceof ElaEntity ? (val.readOnly ? val.isolate() : val) :
    this._value =  val;

    // stop propagation if is the first change
    if (!this.firstChange) {
      this.propagateChange(this._value);
      this.onChange(this._value);
    } else {
      this.firstChange = false;
    }
  }

  onTouched: any = (_arg: any) => {
    /*Empty*/
    // tslint:disable-next-line:semicolon
  };

  propagateChange: any = (value: any) => {
    this.onChange(value);
    // tslint:disable-next-line:semicolon
  };

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = (arg: any) => {
      this.touched = true;
      fn(arg);
    };
  }
  setDisabledState(_isDisabled: boolean): void {}

  writeValue(value: any): void {
    if (value !== null) {
      this.value = value;
    }
  }

  public abstract onChange(value: any): void;
}
