import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { DataManagerService } from '../data-manager.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers: [DataManagerService, DatePipe]
})
export class EmployeeDetailComponent implements OnInit {
  emp: Employee;

  constructor(private route: ActivatedRoute, private router: Router, private m: DataManagerService) { 
    let id = this.route.snapshot.params['_id'];
    this.emp = this.m.getEmp(id);
  }
    

  
  ngOnInit() {
  }

}