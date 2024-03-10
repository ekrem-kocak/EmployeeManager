import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees = new BehaviorSubject<Employee.Model[] | null>(null);
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Employee.Model[]> {
    return this.http.get<Employee.Model[]>(`${this.apiUrl}employee/all`).pipe(
      tap((res) => {
        this.employees.next(res);
      })
    );
  }
}
