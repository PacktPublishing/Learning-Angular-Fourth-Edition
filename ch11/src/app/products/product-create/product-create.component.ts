import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { priceRangeValidator } from '../price-range.directive';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  @Output() added = new EventEmitter<Product>();
  productForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    price: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
      validators: [Validators.required, priceRangeValidator()]
    })
  });
  showPriceRangeHint = false;
  products: Product[] = [];
  products$: Observable<Product[]> | undefined;
  categories = ['Hardware', 'Computers', 'Clothing', 'Software'];
  get name() { return this.productForm.controls.name }
  get price() { return this.productForm.controls.price }

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.price.valueChanges.subscribe(price => {
      if (price) {
        this.showPriceRangeHint = price > 1 && price < 10000;
      }
    });
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
    this.products$ = this.name.valueChanges.pipe(
      map(name => this.products.filter(product => product.name.startsWith(name)))
    );
  }

  createProduct() {
    this.productsService.addProduct(this.name.value, Number(this.price.value)).subscribe(product => {
      this.productForm.reset();
      this.added.emit(product);
    });
  }

}
