import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  selectedProduct = '';
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      this.productDetail.name = 'Webcam';
    }
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct}!`);
  }

}
