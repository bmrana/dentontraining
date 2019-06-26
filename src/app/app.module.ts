import { AdminModule } from './Administration/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { CoursesComponent } from './Public/Courses/courses.component';
import { CourseFilterComponent } from './Public/Courses/course-filter/course-filter.component';
import { CourseListComponent } from './Public/Courses/course-list/course-list.component';
import { CourseAddComponent } from './Public/Courses/course-add/course-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    CoursesComponent,
    CourseFilterComponent,
    CourseListComponent,
    CourseAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
