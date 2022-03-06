import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryAddReactiveComponent } from './accessory-add-reactive.component';

describe('AccessoryAddReactiveComponent', () => {
  let component: AccessoryAddReactiveComponent;
  let fixture: ComponentFixture<AccessoryAddReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoryAddReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoryAddReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
