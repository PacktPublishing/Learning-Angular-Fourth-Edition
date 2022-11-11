import { TestBed } from '@angular/core/testing';

import { AsyncService } from './async.service';

describe('AsyncService', () => {
  let service: AsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set data', () => {
    const result = service.setData('Fake hero');
    expect(result.length).toBe(6);
  });

  it('should get data', (done: DoneFn) => {
    service.getData().subscribe(heroes => {
      expect(heroes.length).toBe(5);
      done();
    });
  });
});
