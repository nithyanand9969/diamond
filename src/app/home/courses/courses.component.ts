import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getAllCourses();
  }
  getAllCourses() {
    this.http.get('assets/data/courses.json').subscribe({
      next: (input) => {
        
        this.courses = input as Course[];
      },
      error: (errors) => {
        console.log(errors);
      },
    });
  }
}
