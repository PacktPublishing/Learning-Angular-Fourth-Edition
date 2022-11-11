import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const heroes = ['Boothstomper', 'Drogfisher', 'Bloodyllips', 'Mr Bu Moverse', 'Piranhaelli'];

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  getData(): Observable<string[]> {
    return of(heroes).pipe(delay(500));
  }

  setData(name: string) {
    return [...heroes, name ];
  }

}
