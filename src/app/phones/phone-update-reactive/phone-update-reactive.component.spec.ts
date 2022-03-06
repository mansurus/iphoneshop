import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneUpdateReactiveComponent } from './phone-update-reactive.component';

describe('PhoneUpdateReactiveComponent', () => {
  let component: PhoneUpdateReactiveComponent;
  let fixture: ComponentFixture<PhoneUpdateReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneUpdateReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneUpdateReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
