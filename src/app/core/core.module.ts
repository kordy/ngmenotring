import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePageComponent } from './course-page/course-page.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchBlockComponent } from './search-block/search-block.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [CoursePageComponent, HeaderComponent, LogoComponent, FooterComponent, BreadcrumbsComponent, SearchBlockComponent, CourseListComponent, CourseListItemComponent, UserInfoComponent],
  exports: [
    CoursePageComponent
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    FontAwesomeModule
  ]
})
export class CoreModule { }
