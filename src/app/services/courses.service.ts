import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageImpl } from '../models/page-impl.model';
import { Page } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  getPaginatedCourses(): Observable<any> {
    return this.httpClient.get("");
  }
}
