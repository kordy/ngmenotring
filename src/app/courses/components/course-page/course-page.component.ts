import { Component, OnInit } from '@angular/core';
import {CourseListType} from "../../СourseListTypes";
import {CoursesService} from "../../../services/courses.service";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['../../../app.component.less', './course-page.component.less']
})
export class CoursePageComponent implements OnInit {

  public searchQuery: string = ''
  public list: CourseListType

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.list = this.coursesService.getCourses()
  }

  onSearch(searchQuery: string): void {
    this.searchQuery = searchQuery;
  }

  onDelete(id: string): void {
    console.log(`delete: ${id}`)
  }

}
