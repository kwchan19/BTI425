import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {DataManagerService} from './data-manager.service';
import { Customer } from './customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  constructor(private m: DataManagerService) { 
    // Fetch the customers from the service,
    // and assign the value to the class property "customers"
    this.customers = this.m.getCustomers();
  }

  ngOnInit() {
  }

}
