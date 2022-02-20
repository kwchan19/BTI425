import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team, Employee, Project, Position } from "./vms";
import { DataManagerService } from './data-manager.service';
import { HttpClient } from '@angular/common/http';

import { GuardAuthService } from './guard-auth.service';

@Component({
  selector: 'app-employees-protected',
  templateUrl: './employees-protected.component.html',
  styleUrls: ['./employees-protected.component.css']
})
export class EmployeesProtectedComponent implements OnInit {
  private emp: Employee[];

  constructor(private m: DataManagerService,private router: Router,private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<Employee[]>('https://lit-coast-73093.herokuapp.com/employees').subscribe(data=>{
      this.emp = data;
      console.log(this.emp);
    });
  }
/*
  select(em: Employee){
    this.router.navigate(['/employeeDetail',em._id]);
  }
  */
}