import { Component, OnInit } from '@angular/core';

import { DataManagerService } from "./data-manager.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Team, Project, Employee } from "./vms";

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private m: DataManagerService
  ) {
    // This prevents a data binding error
    this.t = new Team();
    this.t.TeamLead = new Employee();
    this.t.Projects = [];
    this.t.Employees = [];
  }

  ngOnInit() {

    // Extract the parameter that we need
    let id = this.route.snapshot.params['_id'];

    // Get team
    // o is "object"
    this.m.teamGetById(id).subscribe(o => this.t = o);
  }

  // Properties...

  t: Team;

  // Methods...

  back() {
    this.router.navigate(["/teams"]);
  }

  edit(id: string) {
    this.router.navigate(['/team/edit', id]);
  }

}
