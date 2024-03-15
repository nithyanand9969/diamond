import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input('input')
  input!: Course|Blog;
  @Input('type')
  type = 'C'; //C,B

  castToCourse(input:Course|Blog){
    return input as Course;
  }
  castToBlog(input:Course|Blog){
    return input as Blog;
  }

}
