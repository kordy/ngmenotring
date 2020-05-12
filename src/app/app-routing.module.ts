import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./authorization/authorization.module').then(m => {
      console.log(m);
      return m.AuthorizationModule
    })
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
