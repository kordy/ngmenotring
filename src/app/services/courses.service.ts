import { Injectable } from '@angular/core';

import courses from './courses.json';
import { CourseListType, ICourseItem } from "../courses/СourseListTypes";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: CourseListType = courses;

  constructor() {
  }

  public getCourses(): CourseListType {
    return this.courses
  }

  public createCourse(course: Partial<ICourseItem>) {
    const getuuid = () =>'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,(c,r)=>('x'==c?(r=Math.random()*16|0):(r&0x3|0x8)).toString(16));
    this.courses.push({ ...course, id: getuuid() } as ICourseItem)
  }

  public getCourseById(id: string): ICourseItem {
    return this.getCourses().find(course => id === course.id)
  }

  public updateItem(id: string, courseUpdateFields: Partial<ICourseItem>): void {
    const course = this.getCourses().find(course => id === course.id);
    if (course) {
      Object.assign(course,  courseUpdateFields);
    }
  }

  public removeItem(id: string): void {
    const index = this.getCourses().findIndex(course => id === course.id);
    if (index >= 0) {
      this.getCourses().splice(index, 1);
    }
  }
}
