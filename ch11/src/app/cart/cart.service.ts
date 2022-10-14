import { Injectable } from '@angular/core';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Product[] = [];

  constructor() { }

  addProduct(product: Product) {
    this.cart.push(product);
  }
}
