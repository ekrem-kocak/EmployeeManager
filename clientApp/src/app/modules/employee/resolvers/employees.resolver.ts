import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';

export const employeesResolver: ResolveFn<Employee.Model[]> = (
  route,
  state
) => {
  return inject(EmployeeService).getAll();
};
