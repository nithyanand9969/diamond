import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
  AfterViewInit,
  HostListener,
  EventEmitter,
} from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input('courses')
  courses: Course[] = [];
  onSelect:EventEmitter <string>= new EventEmitter <string>()

  categories: String[] = [];
  slidercontainerwidth = 0;
  slidewith = 0;
  elementShow = 1;
  sliderwidth = 0;
  slidermarginleft = 0;
  @HostListener('window:resize', ['$event'])
  onScreenResiz(event: any) {
   this.setUpSlider()
  }

  @ViewChild('sliderContainer')
  sliderContainer!: ElementRef;

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.getCategories();
    this.setUpSlider();
  }
  setUpSlider() {
    if (window.innerWidth < 500) this.elementShow = 1;
    else if (window.innerWidth < 900) this.elementShow = 2;
    else if (window.innerWidth < 1300) this.elementShow = 3;
    else this.elementShow = 5;
    let container = this.sliderContainer.nativeElement as HTMLElement;
    this.slidercontainerwidth = container.clientWidth;
    this.slidewith = this.slidercontainerwidth / this.elementShow;
    this.sliderwidth = this.slidewith * this.categories.length;

 
  }
  getCategories() {
    this.categories = this.courses.map((course) => course.category);
    this.categories = [...new Set(this.categories)];
   
  }

  prev() {
    if (this.slidermarginleft === 0) {
      return;
    }
    this.slidermarginleft = this.slidermarginleft + this.slidewith;
  }
  next() {
    const notShowing = this.categories.length - this.elementShow;
    const possible = -(notShowing * this.slidewith);
    if (this.slidermarginleft <= possible) {
      return;
    }
    this.slidermarginleft = this.slidermarginleft - this.slidewith;
  }
}
