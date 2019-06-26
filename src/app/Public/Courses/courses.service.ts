import { Lookup } from './../Shared/lookup.model';
import { HttpServiceService } from './../../Data/http-service.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpServiceService) { }

  courseCategories = new Subject<Lookup[]>();
  courseRestrictions = new Subject<Lookup[]>();

  getCourses() {
    this.http.getLookups()
      .subscribe(
        (data) => {
          const restrictions: Lookup[] = [];
          const categories: Lookup[] = [];
          for (const d of data) {
            if (d.Category === 'cats') {
              categories.push(d);
            }

            if (d.Category === 'agencyRestrict') {
              restrictions.push(d);
            }
          }
          this.courseCategories.next(categories);
          this.courseRestrictions.next(restrictions);

        }
      );
  }
}
