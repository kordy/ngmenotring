import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {SharedModule} from "../shared/shared.module";
import {AuthorizationRoutingModule} from "./authorization-routing.module";

@NgModule({
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthorizationRoutingModule
  ]
})
export class AuthorizationModule { }
