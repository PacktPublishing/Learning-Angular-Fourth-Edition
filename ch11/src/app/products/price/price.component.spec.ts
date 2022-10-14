import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceComponent } from './price.component';

describe('PriceComponent', () => {
  let component: PriceComponent;
  let fixture: ComponentFixture<PriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
