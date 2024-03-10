import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(public dialogService: DialogService) {}

  addEmployee() {
    this.dialogService.open(CreateEmployeeComponent, {
      width: '50%',
    });
  }
}
