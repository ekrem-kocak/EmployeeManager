import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    EmployeeListComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
