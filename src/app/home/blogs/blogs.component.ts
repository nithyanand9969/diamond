import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs:Blog[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getAllblogs();
  }
  getAllblogs() {
    this.http.get('assets/data/blogs.json').subscribe({
      next: (blogs) => {
     
        this.blogs = blogs as Blog[];
      },
      error: (errors) => {
        console.log(errors);
      },
    });
  }
} 