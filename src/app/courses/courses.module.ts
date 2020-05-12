import {NgModule} from "@angular/core";
import {CoursePageComponent} from "./components/course-page/course-page.component";
import {SearchBlockComponent} from "./components/course-page/search-block/search-block.component";
import {CourseListComponent} from "./components/course-page/course-list/course-list.component";
import {CourseListItemComponent} from "./components/course-page/course-list-item/course-list-item.component";
import {UserInfoComponent} from "./components/course-page/user-info/user-info.component";
import {CommonModule} from "@angular/common";
import {InlineSVGModule} from "ng-inline-svg";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SharedModule} from "../shared/shared.module";
import { CoursesComponent } from './courses.component';
import {RouterModule} from "@angular/router";
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDetailsPageComponent } from './components/course-details-page/course-details-page.component';
import {HighlightByDateDirective} from "./directives/hyglightByDate.directive";
import {FilterByNamePipe} from "./pipes/filterByName.pipe";

@NgModule({
  declarations: [
    CoursesComponent,
    CoursePageComponent,
    SearchBlockComponent,
    CourseListComponent,
    CourseListItemComponent,
    UserInfoComponent,
    CoursesComponent,
    CourseDetailsPageComponent,
    HighlightByDateDirective,
    FilterByNamePipe
  ],
  exports: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InlineSVGModule,
    FontAwesomeModule,
    RouterModule,
    CoursesRoutingModule
  ]
})

export class CoursesModule { }
