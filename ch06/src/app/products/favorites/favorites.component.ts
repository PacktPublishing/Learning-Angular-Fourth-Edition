import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
