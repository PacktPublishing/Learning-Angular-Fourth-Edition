import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function priceRangeValidator(): ValidatorFn {
  return (control: AbstractControl<number>): ValidationErrors | null => {
    const inRange = control.value > 1 && control.value < 10000;
    return inRange ? null : { outOfRange: true };
  };
}
