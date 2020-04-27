import {Component, Input, OnInit} from '@angular/core';
import {ICourseItem} from "../СourseListTypes";
import { faCalendarAlt, faClock} from "@fortawesome/free-regular-svg-icons";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['../../app.component.less', './course-list-item.component.less']
})
export class CourseListItemComponent implements OnInit {

  @Input()
  public item: ICourseItem
  public icons: {
    faClock: any,
    faCalendarAlt:any,
    faPen: any,
    faTrash: any
  }

  constructor() {
    this.icons = {
      faClock,
      faCalendarAlt,
      faPen,
      faTrash
    }
  }


  ngOnInit(): void {
  }

}
