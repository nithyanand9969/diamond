import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcourceComponent } from './allcource.component';

describe('AllcourceComponent', () => {
  let component: AllcourceComponent;
  let fixture: ComponentFixture<AllcourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllcourceComponent]
    });
    fixture = TestBed.createComponent(AllcourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
