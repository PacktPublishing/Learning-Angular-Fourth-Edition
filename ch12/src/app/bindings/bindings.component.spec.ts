import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';

import { BindingsComponent } from './bindings.component';

@Component({
  template: '<app-bindings [title]="testTitle" (liked)="isFavorite = true"></app-bindings>'
})
export class TestHostComponent {
  testTitle = 'My title';
  isFavorite = false;
}

describe('BindingsComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BindingsComponent,
        TestHostComponent
      ]
    });

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should display the title', () => {
    const titleDisplay: HTMLElement = fixture.nativeElement.querySelector('p');
    expect(titleDisplay.textContent).toEqual(component.testTitle);
  });

  it('should emit the liked event', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.isFavorite).toBeTrue();
  });

  it('should emit the liked event using debugElement', () => {
    const buttonDe = fixture.debugElement.query(By.css('button'));
    buttonDe.triggerEventHandler('click');
    expect(component.isFavorite).toBeTrue();
  });

  it('should emit the liked event using harness', async () => {
    const buttonHarness = await loader.getHarness(MatButtonHarness);
    await buttonHarness.click();
    expect(component.isFavorite).toBeTrue();
  });
});
