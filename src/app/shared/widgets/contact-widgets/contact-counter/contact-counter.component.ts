import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, ofType} from '@ngrx/effects';
import * as contactActions from '../../../../actions/contact.actions';
import {ContactActionType} from '../../../../actions/contact.actions';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-contact-counter',
  templateUrl: './contact-counter.component.html',
  styleUrls: ['./contact-counter.component.scss']
})
export class ContactCounterComponent implements OnInit, OnDestroy {

  public contactsCounter: any = 0;
  destroyed$ = new Subject<boolean>();

  constructor(
    private store: Store<{}>,
    private actions$: Actions,
  ) {
    this.store.dispatch(new contactActions.GetContactCounter());
    this.actions$.pipe(
      ofType(ContactActionType.GET_CONTACT_COUNTER_SUCCESS), takeUntil(this.destroyed$))
      .subscribe((res: any) => {
        this.contactsCounter = res.payload.contacts;
      });
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log(this.destroyed$);
    // if (this.destroyed$) {
    //   this.destroyed$.next(true);
    //   this.destroyed$.complete();
    // }
  }
}
