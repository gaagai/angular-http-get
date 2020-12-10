import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhothDisplayComponent } from './photh-display.component';

describe('PhothDisplayComponent', () => {
  let component: PhothDisplayComponent;
  let fixture: ComponentFixture<PhothDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhothDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhothDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
