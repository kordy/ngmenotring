import { Component, OnInit } from '@angular/core';
import { CourseListType, ICourseList } from "../СourseListTypes";
import { CoursesService } from "../../services/courses.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['../../app.component.less', './course-list.component.less']
})
export class CourseListComponent implements OnInit {

  public list: CourseListType

  constructor(private coursesService: CoursesService) {

  }

  ngOnInit(): void {
    this.list = this.coursesService.getCourses()
  }

}
