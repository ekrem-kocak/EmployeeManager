import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) {}

  employees$: Observable<Employee.Model[] | null> =
    this.employeeService.employees.asObservable();

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((r) => {
      console.log(r);
    });
  }
}
