import { CoursesService } from './../Public/Courses/courses.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lookup } from '../Public/Shared/lookup.model';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getLookups(): Observable<Lookup[]> {
    return this.http.get('http://data.dentontraining.com/api/CourseCategory')
    .pipe(map(
      (data: Lookup[]) => {
        return data;
      }
    )
    );
  }
}
