import { Component, OnInit } from '@angular/core';

import { DataManagerService } from "./data-manager.service";
import { Router } from '@angular/router';

import { Team, Employee, Project } from "./vms";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  constructor(
    private router: Router,
    private m: DataManagerService
  ) {
    this.teams = [];
  }

  ngOnInit() {

    // Sort function
    let cmp = function (a, b) {
      if (a > b) return +1;
      if (a < b) return -1;
      return 0;
    }

    // Get teams
    // c is "collection"
    this.m.teamGetAll()
      .subscribe(c => this.teams = c.sort(function (a, b) { return cmp(a.TeamName, b.TeamName) }));
  }

  // Properties

  teams: Team[];
  selected: Team;

  // Methods

  selectRow(o: Team) {
    this.selected = o;
    // Temporary, comment out or remove after testing...
    console.log(this.selected);

    this.router.navigate(['/team/detail', this.selected._id]);
  }

}
