import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlopkartCartComponent } from './flopkart-cart.component';

describe('CartComponent', () => {
  let component: FlopkartCartComponent;
  let fixture: ComponentFixture<FlopkartCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlopkartCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlopkartCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
