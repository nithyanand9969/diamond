import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotItWorkComponent } from './hot-it-work.component';

describe('HotItWorkComponent', () => {
  let component: HotItWorkComponent;
  let fixture: ComponentFixture<HotItWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotItWorkComponent]
    });
    fixture = TestBed.createComponent(HotItWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
