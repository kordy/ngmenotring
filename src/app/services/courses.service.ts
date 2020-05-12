import { Injectable } from '@angular/core';

import courses from './courses.json';
import {CourseListType} from "../courses/СourseListTypes";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  public getCourses(): CourseListType {
    return courses
  }
}
