import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentsComponent }      from './departments.component';
import { DepartmentDetailComponent }  from './department-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: DepartmentDetailComponent },
  { path: 'departments',     component: DepartmentsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/