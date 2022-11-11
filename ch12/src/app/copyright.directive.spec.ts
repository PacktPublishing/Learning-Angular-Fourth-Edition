import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CopyrightDirective } from './copyright.directive';

@Component({
  template: '<span appCopyright></span>'
})
class TestHostComponent { }

describe('CopyrightDirective', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const fixture = TestBed.configureTestingModule({
      declarations: [
        CopyrightDirective,
        TestHostComponent
      ]
    })
    .createComponent(TestHostComponent);

    container = fixture.nativeElement.querySelector('span');
  });

  it('should have copyright class', () => {
    expect(container.classList).toContain('copyright');
  });

  it('should display copyright details', () => {
    expect(container.textContent).toContain(new Date().getFullYear().toString());
  });
});
