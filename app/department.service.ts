import { Department } from './department';
import { DEPARTMENTS } from './mock-departments';
import { Injectable } from '@angular/core';

@Injectable()
export class DepartmentService {
  getDepartments(): Promise<Department[]> {
    return Promise.resolve(DEPARTMENTS);
  }

  getDepartmentsSlowly(): Promise<Department[]> {
    return new Promise<Department[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getDepartments());
  }

  getDepartment(id: number): Promise<Department> {
    return this.getDepartments()
               .then(departments => departments.find(department => department.id === id));
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/