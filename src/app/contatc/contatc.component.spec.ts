import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatcComponent } from './contatc.component';

describe('ContatcComponent', () => {
  let component: ContatcComponent;
  let fixture: ComponentFixture<ContatcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatcComponent]
    });
    fixture = TestBed.createComponent(ContatcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
