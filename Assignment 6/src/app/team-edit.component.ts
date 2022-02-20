import { Component, OnInit } from '@angular/core';

import { Team, Employee, Project, Position } from "./vms";
import { DataManagerService } from './data-manager.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private m: DataManagerService
  ) {

    this.team = new Team();
    // Temporary
    this.team.TeamName = '';
    this.team.TeamLead = new Employee();
    this.team.Projects = [];
    this.team.Employees = [];

    this.employees = [];
    this.selectedEmployee = '';
    this.selectedEmployees = [];
    this.projects = [];
    this.selectedProjects = [];

    this.teamEditMessage = '';
  }

  ngOnInit() {

    // Extract the parameter that we need
    let id = this.route.snapshot.params['_id'];

    // Get team
    // o is "object"
    this.m.teamGetById(id).subscribe(o => {
      // Set the initial values
      this.team = o;
      // Wow, the Angular DOM manager just makes this happen, no markup required
      this.selectedEmployee = this.team.TeamLead._id;
      // Use the map() method to extract a single property
      this.selectedEmployees = this.team.Employees.map(e => e._id);
      this.selectedProjects = this.team.Projects.map(p => p._id);
    });

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
    // this.m.projectGetAll().subscribe(c => this.projects = c.sort(function (a, b) { return cmp(a.ProjectName, b.ProjectName) }));
    this.m.projectGetAll().subscribe(c => this.projects = c);
  }

  // Properties

  team: Team;
  employees: Employee[];
  projects: Project[];

  selectedEmployee: string;
  selectedEmployees: string[];
  selectedProjects: string[];

  teamEditMessage: string;

  // Methods

  isTeamLeadSelected(id: string): boolean {
    return (this.team.TeamLead._id == id) ? true : false;
  }

  onSubmit(): void {

    // Assemble the team object

    this.team.TeamLead = this.employees.find(e => e._id == this.selectedEmployee);

    // Clear the existing collection first
    this.team.Employees = [];
    this.selectedEmployees.forEach(se => {
      let teamMember = this.employees.find(e => e._id == se);
      this.team.Employees.push(teamMember);
    });

    // Clear the existing collection first
    this.team.Projects = [];
    this.selectedProjects.forEach(sp => {
      let teamProject = this.projects.find(p => p._id == sp);
      this.team.Projects.push(teamProject);
    });

    // Attempt to update the team

    console.log(this.team);
    this.m.teamEdit(this.team)
      .subscribe(res => {
        this.teamEditMessage = res;
        this.router.navigate(['/team/detail', this.team._id]);
      });

  }

}
