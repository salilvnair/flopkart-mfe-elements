import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlopkartHomeComponent } from './flopkart-home.component';

describe('HomeComponent', () => {
  let component: FlopkartHomeComponent;
  let fixture: ComponentFixture<FlopkartHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlopkartHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlopkartHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
