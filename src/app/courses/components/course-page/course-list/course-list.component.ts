import {Component, Input, OnInit} from '@angular/core';
import { CourseListType } from "../../../СourseListTypes";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['../../../../app.component.less', './course-list.component.less']
})

export class CourseListComponent implements OnInit {

  @Input() onDelete: (id: string) => void
  @Input() list: CourseListType

  constructor() {

  }

  ngOnInit(): void {
  }

}
