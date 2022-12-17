import { CanDeactivateFn } from '@angular/router';
import { CartComponent } from './cart/cart.component';

export const checkoutGuard: CanDeactivateFn<CartComponent> = () => {
  const confirmation = confirm('You have pending items in your cart. Do you want to continue?');
  return confirmation;
};
