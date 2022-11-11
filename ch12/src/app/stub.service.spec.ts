import { TestBed } from '@angular/core/testing';

import { StubService } from './stub.service';

describe('StubService', () => {
  let service: StubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
