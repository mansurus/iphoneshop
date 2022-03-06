import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryUpdateReactiveComponent } from './accessory-update-reactive.component';

describe('AccessoryUpdateReactiveComponent', () => {
  let component: AccessoryUpdateReactiveComponent;
  let fixture: ComponentFixture<AccessoryUpdateReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoryUpdateReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoryUpdateReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
