import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CartComponent } from './cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class CheckoutGuard implements CanDeactivate<CartComponent> {
  canDeactivate(
    component: CartComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.showConfirm();
  }

  private showConfirm(): boolean {
    const confirmation = confirm('You have pending items in your cart. Do you want to continue?');
    return confirmation;
  }

}
