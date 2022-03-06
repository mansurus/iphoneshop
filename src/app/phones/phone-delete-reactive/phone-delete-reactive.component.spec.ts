import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDeleteReactiveComponent } from './phone-delete-reactive.component';

describe('PhoneDeleteReactiveComponent', () => {
  let component: PhoneDeleteReactiveComponent;
  let fixture: ComponentFixture<PhoneDeleteReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneDeleteReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDeleteReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
