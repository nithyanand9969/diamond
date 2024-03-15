import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPopComponent } from './video-pop.component';

describe('VideoPopComponent', () => {
  let component: VideoPopComponent;
  let fixture: ComponentFixture<VideoPopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoPopComponent]
    });
    fixture = TestBed.createComponent(VideoPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
