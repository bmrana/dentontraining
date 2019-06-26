import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  categories: string[];
  constructor(private courses: CoursesService) { }

  ngOnInit() {

    this.courses.getCourses();

  }

}
