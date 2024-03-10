import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees = new BehaviorSubject<Employee.Model[]>([]);
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Employee.Model[]> {
    return this.http.get<Employee.Model[]>(`${this.apiUrl}/employee/all`).pipe(
      tap((res) => {
        this.employees.next(res);
      })
    );
  }

  update(employee: Employee.Model): Observable<Employee.Model> {
    return this.http
      .put<Employee.Model>(`${this.apiUrl}/employee/update`, employee)
      .pipe(
        tap((employee) => {
          this.employees.next(
            this.employees.getValue().map((e) => {
              if (e.id === employee.id) {
                return employee;
              }
              return e;
            })
          );
        })
      );
  }

  create(employee: Employee.Model): Observable<Employee.Model> {
    return this.http
      .post<Employee.Model>(`${this.apiUrl}/employee/create`, employee)
      .pipe(
        tap((employee) => {
          this.employees.next(this.employees.getValue().concat(employee));
        })
      );
  }
}
