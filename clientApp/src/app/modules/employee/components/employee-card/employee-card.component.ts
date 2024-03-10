import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee';
import { DialogService } from 'primeng/dynamicdialog';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent {
  @Input() employee: Employee.Model | undefined;

  constructor(public dialogService: DialogService) {}

  editEmployee() {
    this.dialogService.open(CreateEmployeeComponent, {
      data: {
        employee: this.employee,
      },
      width: '50%',
    });
  }
}
