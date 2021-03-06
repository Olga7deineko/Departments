import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Department } from './department';
import { DepartmentService } from './department.service';

@Component({
  moduleId: module.id,
  selector: 'my-departments',
  templateUrl: 'departments.component.html',
  styleUrls: [ 'departments.component.css' ]
})
export class DepartmentsComponent implements OnInit {
  departments: Department[];
  selectedDepartment: Department;

  constructor(
    private router: Router,
    private departmentService: DepartmentService) { }

  getDepartments(): void {
    this.departmentService.getDepartments().then(departments => this.departments = departments);
  }

  ngOnInit(): void {
    this.getDepartments();
  }

  onSelect(department: Department): void {
    this.selectedDepartment = department;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedDepartment.id]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/