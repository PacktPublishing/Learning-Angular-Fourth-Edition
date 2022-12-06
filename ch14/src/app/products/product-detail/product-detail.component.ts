import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnChanges {

  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Input() id = -1;
  product$: Observable<Product> | undefined;

  constructor(private productService: ProductsService, public authService: AuthService) { }

  ngOnChanges(): void {
   this.product$ = this.productService.getProduct(this.id);
  }

  buy() {
    this.bought.emit();
  }

  changePrice(product: Product, price: number) {
    this.productService.updateProduct(product.id, price).subscribe(() => {
      alert(`The price of ${product.name} was changed!`);
    });
  }

  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.deleted.emit();
    });
  }

}
