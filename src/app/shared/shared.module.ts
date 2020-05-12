import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./layout/header/header.component";
import {LogoComponent} from "./layout/logo/logo.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {BreadcrumbsComponent} from "./layout/breadcrumbs/breadcrumbs.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {DurationPipe} from "./pipes/duration.pipe";
import {OrderByPipe} from "./pipes/orderBy.pipe";



@NgModule({
  declarations: [HeaderComponent, LogoComponent, FooterComponent, BreadcrumbsComponent, DurationPipe, OrderByPipe],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    DurationPipe,
    OrderByPipe
  ]
})
export class SharedModule { }
