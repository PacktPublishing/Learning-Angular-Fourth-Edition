import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductViewService } from './product-view.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [ProductViewService]
})
export class ProductViewComponent implements OnDestroy, OnInit {

  @Input() id = -1;
  name = '';
  private productSub = new Subject<void>();

  constructor(private productviewService: ProductViewService) { }

  ngOnDestroy(): void {
    this.productSub.next();
    this.productSub.complete();
  }

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct() {
    this.productviewService.getProduct(this.id).pipe(
      takeUntil(this.productSub)
    ).subscribe(product => {
      if (product) {
        this.name = product.name;
      }
    });
  }

}
