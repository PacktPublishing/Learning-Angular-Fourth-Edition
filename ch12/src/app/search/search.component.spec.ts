import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';

let fixture: ComponentFixture<SearchComponent>;

class Page {
  get searchText() { return this.query<HTMLInputElement>('input'); }
  get submitButton() { return this.query<HTMLButtonElement>('button'); }

  private query<T>(selector: string): T {
    return fixture.nativeElement.querySelector(selector);
  }
}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let button: HTMLButtonElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SearchComponent]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    button = fixture.nativeElement.querySelector('button');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the searchText', () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = 'Angular';
    input.dispatchEvent(new CustomEvent('input'));
    expect(component.searchText.value).toBe('Angular');
  });

  it('should disable search button', () => {
    component.searchText.setValue('');
    expect(button.disabled).toBeTrue();
  });

  it('should log to the console', () => {
    const spy = spyOn(console, 'log');
    component.searchText.setValue('Angular');
    fixture.detectChanges();
    button.click();
    expect(spy).toHaveBeenCalledWith('You searched for: Angular');
  });
});
