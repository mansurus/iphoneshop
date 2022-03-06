import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneAddReactiveComponent } from './phone-add-reactive.component';

describe('PhoneAddReactiveComponent', () => {
  let component: PhoneAddReactiveComponent;
  let fixture: ComponentFixture<PhoneAddReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneAddReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneAddReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
