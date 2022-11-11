import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StubService {
  name = '';
  isBusy = false;
}
