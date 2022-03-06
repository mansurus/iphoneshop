import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryDeleteReactiveComponent } from './accessory-delete-reactive.component';

describe('AccessoryDeleteReactiveComponent', () => {
  let component: AccessoryDeleteReactiveComponent;
  let fixture: ComponentFixture<AccessoryDeleteReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoryDeleteReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoryDeleteReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
