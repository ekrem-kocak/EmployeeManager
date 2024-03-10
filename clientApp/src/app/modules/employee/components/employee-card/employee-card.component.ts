import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee';
import { DialogService } from 'primeng/dynamicdialog';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { EmployeeService } from '../../services/employee.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent {
  @Input() employee: Employee.Model | undefined;

  constructor(
    public dialogService: DialogService,
    private employeeService: EmployeeService
  ) {}

  editEmployee() {
    this.dialogService.open(CreateEmployeeComponent, {
      data: {
        employee: this.employee,
      },
      width: '50%',
    });
  }

  delete() {
    this.employeeService.delete(this.employee!.id).pipe(take(1)).subscribe();
  }
}
