import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @ViewChild('addCourseModal')
  addCourseModal: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddCourse() {
    console.log('click');
  }

  open() {
    console.log('here');
  }
}
