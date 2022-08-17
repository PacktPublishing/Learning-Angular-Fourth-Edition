import { Component, Input, OnInit } from '@angular/core';
import { ProductViewService } from './product-view.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [ProductViewService]
})
export class ProductViewComponent implements OnInit {

  @Input() id = -1;
  name = '';

  constructor(private productviewService: ProductViewService) { }

  ngOnInit(): void {
    const product = this.productviewService.getProduct(this.id);
    if (product) {
      this.name = product.name;
    }
  }

}
