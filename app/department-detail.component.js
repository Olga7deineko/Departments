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
var common_1 = require('@angular/common');
var department_service_1 = require('./department.service');
var DepartmentDetailComponent = (function () {
    function DepartmentDetailComponent(departmentService, route, location) {
        this.departmentService = departmentService;
        this.route = route;
        this.location = location;
    }
    DepartmentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.departmentService.getDepartment(id)
                .then(function (department) { return _this.department = department; });
        });
    };
    DepartmentDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    DepartmentDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-department-detail',
            templateUrl: 'department-detail.component.html',
            styleUrls: ['department-detail.component.css']
        }), 
        __metadata('design:paramtypes', [department_service_1.DepartmentService, router_1.ActivatedRoute, common_1.Location])
    ], DepartmentDetailComponent);
    return DepartmentDetailComponent;
}());
exports.DepartmentDetailComponent = DepartmentDetailComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=department-detail.component.js.map