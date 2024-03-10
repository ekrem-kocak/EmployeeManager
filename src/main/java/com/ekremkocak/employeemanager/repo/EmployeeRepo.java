package com.ekremkocak.employeemanager.repo;

import com.ekremkocak.employeemanager.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {
}
