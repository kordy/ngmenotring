import { Pipe, PipeTransform } from '@angular/core';
import {CourseListType, ICourseItem} from "../СourseListTypes";

@Pipe({
  name: 'filterByName'
})

export class FilterByNamePipe implements PipeTransform {
  transform(courses: CourseListType, query: string): CourseListType {
    if (!query) return courses;
    const handledQuery = query.toLowerCase();
    return courses.filter((item: ICourseItem) => item.title.toLowerCase().indexOf(handledQuery) >= 0);
  }
}
