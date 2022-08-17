import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit, AfterViewInit {

  selectedProduct: Product | undefined;
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

}
