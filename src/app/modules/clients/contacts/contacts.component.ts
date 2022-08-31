import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as contactActions from '../../../actions/contact.actions';
import {Store} from '@ngrx/store';
import {Actions, ofType} from '@ngrx/effects';
import {ContactActionType} from '../../../actions/contact.actions';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {ContactEntity} from '../../../core/entities/contact.entity';
// import {MatPaginator} from '@angular/material/paginator';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, AfterViewInit, OnDestroy {
  public openNewContactDialog = false;
  public dataSource: MatTableDataSource<ContactEntity> | any;

  // @ViewChild(MatPaginator) paginator: MatPaginator | any;
  // @ViewChild(MatSort) sort: MatSort | any;

  displayedColumns: string[] = ['name', 'email', 'type'];

  name = '';
  lastname = '';
  email = '';
  telefono = '';
  movil = '';
  type = '';

  destroyed$ = new Subject<boolean>();

  constructor(
    private store: Store<{}>,
    private actions$: Actions,
    private liveAnnouncer: LiveAnnouncer
  ) {

    this.store.dispatch(new contactActions.GetContactList());

    this.actions$.pipe(ofType(ContactActionType.GET_CONTACT_LIST_SUCCESS), takeUntil(this.destroyed$))
      .subscribe((res: any) => {
        this.dataSource = new MatTableDataSource<ContactEntity>(res.payload.contacts);
      });
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void{
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  ngOnDestroy(): void {
    if (this.destroyed$) {
      this.destroyed$.next(true);
      this.destroyed$.complete();
    }
  }

  openNewContactForm(): void {
    this.openNewContactDialog = true;
  }
  closeNewContactForm(): void {
    this.openNewContactDialog = false;
  }
  resetContactModel(): void {
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.telefono = '';
    this.movil = '';
    this.type = '';
  }

  createNewContact(): void {
    try {
      this.store.dispatch(new contactActions.PostContactCreate(
        {
          name: this.name,
          lastname: this.lastname,
          email: this.email,
          telefono: this.telefono,
          movil: this.movil,
          type: this.type,
        }
      ));

      this.resetContactModel();
      this.closeNewContactForm();
      this.store.dispatch(new contactActions.GetContactList());
    } catch (e) {
      console.log('something went wrong', e);
    }



  }

  /** Announce the change in sort state for assistive technology. */
  // announceSortChange(sortState: any): void {
  //   // This example uses English messages. If your application supports
  //   // multiple language, you would internationalize these strings.
  //   // Furthermore, you can customize the message to add additional
  //   // details about the values being sorted.
  //   if (sortState.direction) {
  //     this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this.liveAnnouncer.announce('Sorting cleared');
  //   }
  // }
}
