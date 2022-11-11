import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncService } from '../async.service';

@Component({
  selector: 'app-async',
  template: `
    <p *ngFor="let hero of data$ | async">
      {{hero}}
    </p>
  `
})
export class AsyncComponent implements OnInit {
  data$: Observable<string[]> | undefined;

  constructor(private asyncService: AsyncService) { }

  ngOnInit() {
    this.data$ = this.asyncService.getData();
  }
}
