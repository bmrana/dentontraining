import { Course } from './../../Shared/course.model';
import { Lookup } from './../../Shared/lookup.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;

  addCourseForm: FormGroup;
  courseCategories: Lookup[];

  categories: Lookup[];
  restrictions: Lookup[];

  constructor(private courses: CoursesService, private formBuilder: FormBuilder,
  ) {
    this.addCourseForm = this.formBuilder.group({
      courseName: ['', Validators.required],
      courseDescription: ['', Validators.required],
      courseHours: ['', Validators.required],
      courseIsFree: true,
      courseCost: [{ value: '', disabled: true }],
      courseRestrictions: 0,
      courseExternalRegistration: false,
      courseExternalRegistrationLink: { value: '', disabled: true },
      courseCategoryArray: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.courseCategories = [];
    this.restrictions = [];

    this.courses.courseCategories.subscribe(
      (c) => {
        for (let cats of c) {
          this.addCategory(cats);
        }
      }
    );
    this.courses.courseRestrictions.subscribe(
      (d) => {
        this.restrictions.push(...d);
      }
    );

    this.instantiateCustomValidators();
  }

  get courseCategoriesArray() {
    return this.addCourseForm.get('courseCategoryArray') as FormArray;
  }

  get courseName() {
    return this.addCourseForm.get('courseName');
  }

  get courseDescription() {
    return this.addCourseForm.get('courseDescription');
  }

  get courseCost() {
    return this.addCourseForm.get('courseCost');
  }

  get courseHours() {
    return this.addCourseForm.get('courseHours');
  }

  get courseIsFree() {
    return this.addCourseForm.get('courseIsFree');
  }

  addCategory(category) {
    this.courseCategories.push(category);
    this.courseCategoriesArray.push(this.formBuilder.control(false));
  }

  checkFree(checked) {
    checked.currentTarget.checked ? this.addCourseForm.get('courseCost').disable() : this.addCourseForm.get('courseCost').enable();
  }

  externalToggle(checked) {
    checked.currentTarget.checked ? this.addCourseForm.get('courseExternalRegistrationLink').enable()
      : this.addCourseForm.get('courseExternalRegistrationLink').disable();
  }

  instantiateCustomValidators() {
    this.addCourseForm.get('courseIsFree').valueChanges.subscribe(
      (value) => {
        if (value === false) {
          this.addCourseForm.get('courseCost').setValidators([Validators.required]);
        }
        this.addCourseForm.get('courseCost').updateValueAndValidity();
      }
    );

    this.addCourseForm.get('courseExternalRegistration').valueChanges.subscribe(
      (value) => {
        if (value === true) {
          this.addCourseForm.get('courseExternalRegistrationLink').setValidators([Validators.required]);
        }
        this.addCourseForm.get('courseExternalRegistrationLink').updateValueAndValidity();
      }
    );
  }
  onSubmit() {
    const newCourse: Course = {
      courseId: -99,
      courseName: this.addCourseForm.get('courseName').value,
      courseDescription: this.addCourseForm.get('courseDescription').value,
      courseCost: this.addCourseForm.get('courseIsFree').value ? 0 : this.addCourseForm.get('courseCost').value,
      courseHours: this.addCourseForm.get('courseHours').value,
      courseCategories: this.addCourseForm.get('courseCategoryArray').value,
      courseIsFree: this.addCourseForm.get('courseIsFree').value,
      courseRestrictions: this.addCourseForm.get('courseRestrictions').value,
      courseExternalRegistration: this.addCourseForm.get('courseExternalRegistration').value,
      courseExternalRegistrationLink:
        this.addCourseForm.get('courseExternalRegistration').value ? this.addCourseForm.get('courseExternalRegistrationLink').value : '' };
    console.log(newCourse);
    this.resetForm();
  }

  resetForm() {
    console.log('reset');
    this.addCourseForm.reset();
    this.closeModal();
  }

  closeAction() {
    console.log('CloseAction');
    this.closeModal();
  }

  closeModal() {
    this.closeBtn.nativeElement.click();
  }
}
