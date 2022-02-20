import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "../data-manager-service";
import { Team } from "../team";
import { HttpClient } from '@angular/common/http';
import { DatePipe } from "@angular/common";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Employee } from "../employee";
import { Project } from "../project";

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css'],
  providers: [DataManagerService, DatePipe]
})
export class TeamViewComponent implements OnInit {
  t: Team;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private m: DataManagerService) { 

    // This prevents a data binding error
// Assume that "team" is a property that will hold the data
// that comes back from the call to the web service
    this.t = new Team();
    this.t.TeamLead = new Employee();
    this.t.Projects = [];
    this.t.Employees = [];  

    let id = this.route.snapshot.params['id'];
    this.m.teamGetById(id).subscribe(c => this.t = c[0]);
  }

  ngOnInit() {
    console.log(this.t);
  }

  goToDetails(){
    this.router.navigate(['/teamEdit',this.t._id]);
  }

  
}
