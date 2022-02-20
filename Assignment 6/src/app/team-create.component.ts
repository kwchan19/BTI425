import { Component, OnInit } from '@angular/core';

import { Team, Employee, Project, Position } from "./vms";
import { DataManagerService } from './data-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  constructor(
    private router: Router,
    private m: DataManagerService
  ) {

    this.team = new Team();

    // To prevent console errors during rendering
    this.team.TeamName = '';
    this.team.TeamLead = new Employee();
    this.team.Projects = [];
    this.team.Employees = [];

    this.employees = [];
    this.projects = [];

    this.selectedTeamLead = '';
    this.selectedEmployees = [];
    this.selectedProjects = [];
  }

  ngOnInit() {

    // Sort function
    let cmp = function (a, b) {
      if (a > b) return +1;
      if (a < b) return -1;
      return 0;
    }

    // Get employees
    // c is "collection"
    this.m.employeeGetAll().subscribe(c => this.employees = c.sort(function (a, b) { return cmp(a.LastName, b.LastName) || cmp(a.FirstName, b.FirstName) }));

    // Get projects
    // c is "collection"
    this.m.projectGetAll().subscribe(c => this.projects = c.sort(function (a, b) { return cmp(a.ProjectName, b.ProjectName) }));
  }

  // Properties

  team: Team;
  employees: Employee[];
  projects: Project[];

  selectedTeamLead: string;
  selectedEmployees: string[];
  selectedProjects: string[];

  // Methods

  onSubmit(): void {

    // Assemble the team object

    this.team.TeamLead = this.employees.find(e => e._id == this.selectedTeamLead);

    this.selectedEmployees.forEach(se => {
      let teamMember = this.employees.find(e => e._id == se);
      this.team.Employees.push(teamMember);
    });

    this.selectedProjects.forEach(sp => {
      let teamProject = this.projects.find(p => p._id == sp);
      this.team.Projects.push(teamProject);
    });

    // Attempt to add the team

    console.log(this.team);

    this.m.teamAdd(this.team).subscribe(res => {

      // Show the response from the web service
      console.log(res as string);

      // Extract the team identifier
      let teamId = res as string;
      teamId = teamId.replace('Team ', '');
      teamId = teamId.replace(' added successfully', '');
      console.log(teamId);

      // Navigate to the team detail
      this.router.navigate(['/team/detail', teamId]);
    });

  }

}
