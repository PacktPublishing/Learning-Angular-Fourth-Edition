import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Injectable()
export class ProductViewService {

  private product: Product | undefined;

  constructor(private productService: ProductsService) { }

  getProduct(id: number): Observable<Product> {
    return this.productService.getProducts().pipe(
      switchMap(products => {
        if (!this.product) {
          this.product = products[id];
        }
        return of(this.product);
      })
    );
  }

}
