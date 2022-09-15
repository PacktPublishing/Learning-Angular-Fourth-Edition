import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  @Output() added = new EventEmitter<Product>();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
  }

  createProduct(name: string, price: number) {
    this.productsService.addProduct(name, price).subscribe(product => {
      this.added.emit(product);
    });
  }

}
