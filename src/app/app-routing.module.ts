import { CourseListComponent } from './Administration/Courses/course-list/course-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './Public/Courses/courses.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'Courses', component: CoursesComponent },
  { path: 'Course-Admin', component: CourseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
