import { TestBed } from '@angular/core/testing';
// import { provideMockActions } from '@ngrx/effects/testing';
// import { Observable } from 'rxjs';

import { AuthenticationEffects } from './authentication.effects';

describe('AuthenticationEffects', () => {
  // const actions$: Observable<any>;
  let effects: AuthenticationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationEffects,
        // provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AuthenticationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
