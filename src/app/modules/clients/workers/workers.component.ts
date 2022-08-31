import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as workerActions from '../../../actions/worker.actions';
import {Store} from '@ngrx/store';
import {Actions, ofType} from '@ngrx/effects';
import {WorkerActionType} from '../../../actions/worker.actions';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
// import {MatPaginator} from '@angular/material/paginator';
import {LiveAnnouncer} from '@angular/cdk/a11y';
// import {MatSort} from '@angular/material/sort';
import {WorkerEntity} from '../../../core/entities/worker.entity';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit, AfterViewInit, OnDestroy {
  public openNewWorkerDialog = false;
  public dataSource: MatTableDataSource<WorkerEntity> | any;

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
    // private liveAnnouncer: LiveAnnouncer
  ) {
    this.store.dispatch(new workerActions.GetWorkerList());

    this.actions$.pipe(ofType(WorkerActionType.GET_WORKER_LIST_SUCCESS), takeUntil(this.destroyed$))
      .subscribe((res: any) => {
        console.log(res);
        this.dataSource = new MatTableDataSource<WorkerEntity>(res.payload.workers);
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

  openNewWorkerForm(): void {
    this.openNewWorkerDialog = true;
  }
  closeNewWorkerForm(): void {
    this.openNewWorkerDialog = false;
  }
  resetWorkerModel(): void {
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.telefono = '';
    this.movil = '';
    this.type = '';
  }

  createNewWorker(): void {
    try {
      this.store.dispatch(new workerActions.PostWorkerCreate(
        {
          name: this.name,
          lastname: this.lastname,
          email: this.email,
          telefono: this.telefono,
          movil: this.movil,
          type: this.type,
        }
      ));

      this.resetWorkerModel();
      this.closeNewWorkerForm();
      this.store.dispatch(new workerActions.GetWorkerList());
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
