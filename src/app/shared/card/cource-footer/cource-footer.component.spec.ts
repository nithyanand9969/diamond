import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceFooterComponent } from './cource-footer.component';

describe('CourceFooterComponent', () => {
  let component: CourceFooterComponent;
  let fixture: ComponentFixture<CourceFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourceFooterComponent]
    });
    fixture = TestBed.createComponent(CourceFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
