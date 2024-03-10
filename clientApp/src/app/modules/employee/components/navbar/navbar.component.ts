import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { EmployeeService } from '../../services/employee.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchText = '';

  constructor(
    public dialogService: DialogService,
    private employeeService: EmployeeService
  ) {}

  addEmployee() {
    this.dialogService.open(CreateEmployeeComponent, {
      width: '50%',
    });
  }

  search() {
    this.employeeService.search(this.searchText).pipe(take(1)).subscribe();
  }
}
