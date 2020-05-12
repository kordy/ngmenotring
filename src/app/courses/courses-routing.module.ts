import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CoursePageComponent} from "./components/course-page/course-page.component";
import {CoursesComponent} from "./courses.component";
import {CourseDetailsPageComponent} from "./components/course-details-page/course-details-page.component";

const coursesRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      {
        path: '',
        component: CoursePageComponent,
      },
      {
        path: ':id',
        component: CourseDetailsPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(coursesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoursesRoutingModule { }
