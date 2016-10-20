"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var department_service_1 = require('./department.service');
var DepartmentsComponent = (function () {
    function DepartmentsComponent(router, departmentService) {
        this.router = router;
        this.departmentService = departmentService;
    }
    DepartmentsComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departmentService.getDepartments().then(function (departments) { return _this.departments = departments; });
    };
    DepartmentsComponent.prototype.ngOnInit = function () {
        this.getDepartments();
    };
    DepartmentsComponent.prototype.onSelect = function (department) {
        this.selectedDepartment = department;
    };
    DepartmentsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedDepartment.id]);
    };
    DepartmentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-departments',
            templateUrl: 'departments.component.html',
            styleUrls: ['departments.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, department_service_1.DepartmentService])
    ], DepartmentsComponent);
    return DepartmentsComponent;
}());
exports.DepartmentsComponent = DepartmentsComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=departments.component.js.map