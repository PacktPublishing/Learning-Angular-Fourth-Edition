import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bindings',
  template: `
    <p>{{title}}</p>
    <button mat-button (click)="liked.emit()">Like!</button>
  `
})
export class BindingsComponent {
  @Input() title = '';
  @Output() liked = new EventEmitter();
}
