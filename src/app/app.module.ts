import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import {CoursesModule} from "./courses/courses.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
