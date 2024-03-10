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
  apiUrl = environment.apiUrl + '/employee';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Employee.Model[]> {
    return this.http.get<Employee.Model[]>(`${this.apiUrl}/all`).pipe(
      tap((res) => {
        this.employees.next(res);
      })
    );
  }

  update(employee: Employee.Model): Observable<Employee.Model> {
    return this.http
      .put<Employee.Model>(`${this.apiUrl}/update`, employee)
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
      .post<Employee.Model>(`${this.apiUrl}/create`, employee)
      .pipe(
        tap((employee) => {
          this.employees.next(this.employees.getValue().concat(employee));
        })
      );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`).pipe(
      tap(() => {
        this.employees.next(
          this.employees.getValue().filter((e) => e.id !== id)
        );
      })
    );
  }

  search(text: string) {
    return this.getAll().pipe(
      tap((employees) => {
        console.log(
          employees.filter(
            (e) =>
              e.email.includes(text) ||
              e.jobTitle.includes(text) ||
              e.name.includes(text) ||
              e.phone.includes(text)
          )
        );
        this.employees.next(
          employees.filter(
            (e) =>
              e.email.includes(text) ||
              e.jobTitle.includes(text) ||
              e.name.includes(text) ||
              e.phone.includes(text)
          )
        );
      })
    );
  }
}
