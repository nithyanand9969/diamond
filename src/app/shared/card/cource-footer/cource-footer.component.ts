import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';


@Component({
  selector: 'app-cource-footer',
  templateUrl: './cource-footer.component.html',
  styleUrls: ['./cource-footer.component.css']
})
export class CourceFooterComponent implements OnInit {
  
  @Input('course')
  course!:Course;

  

  constructor(){}

  ngOnInit(): void {
    
  }
}
