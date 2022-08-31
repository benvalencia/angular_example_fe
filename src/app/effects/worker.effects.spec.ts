import { TestBed } from '@angular/core/testing';
// import { provideMockActions } from '@ngrx/effects/testing';
// import { Observable } from 'rxjs';

import { WorkerEffects } from './worker.effects';

describe('WorkerEffects', () => {
  // let actions$: Observable<any>;
  let effects: WorkerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WorkerEffects,
        // provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(WorkerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
