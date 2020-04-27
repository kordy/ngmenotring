import { Injectable } from '@angular/core';
import { CourseListType } from "../core/СourseListTypes";
import courses from './courses.json';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  public getCourses(): CourseListType {
    return courses
  }
}
