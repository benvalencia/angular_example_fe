import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// import { DictIterator } from 'ela';
// import { environment } from '../../../../../environments/environment';
// import { FloatingDropdownBoxComponent } from '../../box/floating-dropdown-box/floating-dropdown-box.component';
import {InputControlDirective} from '../input-control.directive';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent extends InputControlDirective implements OnChanges {
  @Input() options: any[] | any;
  @Input() label: string | any;
  @Input() identifier: string | any;
  @Input() placeholder: string | any;
  @Input() loading: boolean | any;
  @Input() buttonStyle = false;
  @Input() iconPosition?: string;
  @Input() icon?: string;
  @Input() showBlank: boolean | any;
  @Input() blankLabel: string | any;
  @Input() expandableWidth: boolean | any;
  @Input() showAddOption: boolean | any;
  @Input() addOptionLabel: string | any;
  @Input() isInput = false;
  @Input() disabled = false;
  @Input() required = false;
  @Input() showSelectedValue = true;
  @Input() readonly = false;
  @Input() translate = false;

  noOptions: boolean | any;
  // addImage = environment.images.general.add;
  @Output() addOption = new EventEmitter();

  // @ViewChild(FloatingDropdownBoxComponent)
  // public dropdown: FloatingDropdownBoxComponent;

  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.options) {
      if (this.disabled === false) {
        this.noOptions =
          !this.showAddOption &&
          (!changes.options.currentValue || changes.options.currentValue.length === 0);
        // commented because it triggers change propagation and marks obj as unsaved
        // if (this.noOptions) {
        //   this.value = undefined;
        // }
        // PENDING 'AUTO-SELECT WHEN THEREIS ONLY ONE OPTION
        // PROBLEM WHEN SELECT-DROPDOWN ARE CONNECTED BETWEEN THEM...
        // if (this.options) {
        //   if (this.options.length === 1 && this.required && this.value === undefined) {
        //     if (this.options instanceof Array) {
        //         this.value = this.options[0];
        //     } else if (this.options instanceof DictIterator) {
        //         this.value = this.options.toArray()[0];
        //     }
        //   }
        // }
      }
    }
  }

  public get isDisabled(): any {
    return this.disabled || this.noOptions;
  }

  select(option: any): void {
    // set the input value
    this.value = option;
    // propagate changes to ngModel
    this.change.emit(option);
    // close dropdown
    // this.dropdown.hide();
  }

  add(): void {
    this.addOption.emit();
  }

  toggleDropdown(_event: Event): void {
    _event.stopPropagation();
    if (this.isDisabled || this.readonly) {
      // this.dropdown.hide();
    } else {
      // this.dropdown.toggle();
    }
  }

  onChange(_val: any): void {
    // empty
  }
}
