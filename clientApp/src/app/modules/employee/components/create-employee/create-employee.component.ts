import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmployeeService } from '../../services/employee.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  updateMode = false;

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    email: new FormControl('', [Validators.required]),
    employeeCode: new FormControl(),
    imageUrl: new FormControl('', [Validators.required]),
    jobTitle: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  constructor(
    private config: DynamicDialogConfig,
    private employeeService: EmployeeService,
    private ddRef: DynamicDialogRef
  ) {}

  ngOnInit(): void {
    if (!!this.config.data) {
      this.updateMode = true;
      console.log(this.config.data.employee);
      this.form.patchValue(this.config.data.employee);
    }
  }

  submit() {
    if (this.updateMode) {
      this.employeeService.update(this.form.value).pipe(take(1)).subscribe();
    } else {
      this.employeeService.create(this.form.value).pipe(take(1)).subscribe();
    }
    this.ddRef.close();
  }
}
