import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Product } from './product';
import { ProductsService } from './products.service';

export const productDetailResolver: ResolveFn<Product> = (route: ActivatedRouteSnapshot) => {
  const productService = inject(ProductsService);

  const id = Number(route.paramMap.get('id'));
  return productService.getProduct(id);
};
