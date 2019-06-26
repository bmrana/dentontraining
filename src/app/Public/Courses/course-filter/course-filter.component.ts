import { Lookup } from './../../Shared/lookup.model';
import { CoursesService } from './../courses.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.css']
})
export class CourseFilterComponent implements OnInit {
  categories: Lookup[];
  selectedCategories = [];

  constructor(private courses: CoursesService) { }

  ngOnInit() {
    this.courses.courseCategories.subscribe(
      (c) => {
        this.categories = c;
      }
    );
  }

  testChanged(id) {
    if (this.selectedCategories.indexOf(id) === -1) {
      this.selectedCategories.push(id);
    } else {
      this.selectedCategories.splice(this.selectedCategories.indexOf(id), 1);
    }

    console.log(this.selectedCategories);
  }

}
