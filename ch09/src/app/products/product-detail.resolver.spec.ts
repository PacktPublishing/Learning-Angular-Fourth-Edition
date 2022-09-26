import { TestBed } from '@angular/core/testing';

import { ProductDetailResolver } from './product-detail.resolver';

describe('ProductDetailResolver', () => {
  let resolver: ProductDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
