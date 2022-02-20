import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team, Employee, Project, Position } from "./vms";
import { DataManagerService } from './data-manager.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employees-open',
  templateUrl: './employees-open.component.html',
  styleUrls: ['./employees-open.component.css']
})
export class EmployeesOpenComponent implements OnInit {
  private emp: Employee[];

  constructor(private m: DataManagerService,private router: Router,private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Employee[]>('https://lit-coast-73093.herokuapp.com/employees-raw').subscribe(data=>{
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