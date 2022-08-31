import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as companyActions from '../../../actions/company/company.actions';
import {Store} from '@ngrx/store';
import {Actions, ofType} from '@ngrx/effects';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {CompanyEntity} from '../../../core/entities/company.entity';
// import {MatPaginator} from '@angular/material/paginator';
// import {LiveAnnouncer} from '@angular/cdk/a11y';
// import {MatSort} from '@angular/material/sort';
import {CompanyActionType} from '../../../actions/company/company.actions';

@Component({
  selector: 'app-companies-admin',
  templateUrl: './companies-admin.component.html',
  styleUrls: ['./companies-admin.component.scss']
})
export class CompaniesAdminComponent implements OnInit, AfterViewInit, OnDestroy {
  public openNewContactDialog = false;
  public dataSource: MatTableDataSource<CompanyEntity> | any;

  // @ViewChild(MatPaginator) paginator: MatPaginator | any;
  // @ViewChild(MatSort) sort: MatSort | any;

  displayedColumns: string[] = ['uuid', 'name', 'owner', 'createdBy', 'createdDate'];

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
    // private liveAnnouncer: LiveAnnouncer
  ) {
    this.store.dispatch(new companyActions.GetCompanyAdminList());
    this.actions$.pipe(ofType(CompanyActionType.GET_COMPANY_ADMIN_LIST_SUCCESS), takeUntil(this.destroyed$))
      .subscribe((res: any) => {
        this.dataSource = new MatTableDataSource<CompanyEntity>(res.payload.companies);
      });
  }

  ngOnInit(): void {}
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
    console.log('test');
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

  copySuccess(): void {
    console.log('copied string success');
  }
}
