import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-blog-footer',
  templateUrl: './blog-footer.component.html',
  styleUrls: ['./blog-footer.component.css']
})
export class BlogFooterComponent {
  @Input('blog')
  blog!:Blog;

}
