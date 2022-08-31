import { TestBed } from '@angular/core/testing';

import { GlobalyApiService } from './globaly-api.service';

describe('GlobalyApiService', () => {
  let service: GlobalyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
