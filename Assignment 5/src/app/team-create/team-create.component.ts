import { Component, OnInit,  Pipe, PipeTransform } from '@angular/core';
import { DataManagerService } from '../data-manager-service';
import { Employee } from '../employee';
import { Project } from '../project';
import { Team } from '../team';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css'],

})

export class TeamCreateComponent implements OnInit {
  dataTeam: Team = new Team();
  teamLead: String;

  employees: Employee[] = [];
  selectedMembers: String[];

  projects: Project[] = [];
  selectedProjects: String[];

  constructor(private m: DataManagerService, private router: Router) { 

  }

  ngOnInit() {
    this.getData();
    
    this.employees.sort(function(a, b){
      var x = a.FirstName.toLowerCase();
      var y = b.FirstName.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1; 
      }
      return 0;
    });

    this.projects.sort(function(a, b){
      var x = a.ProjectName.toLowerCase();
      var y = b.ProjectName.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  }

  

  getData(): void {
    this.m.getEmployees().subscribe(employees => this.employees = employees);
    this.m.getProjects().subscribe(projects => this.projects = projects);
  }

 
  


  onSubmit(){
    console.log(this.dataTeam);
    console.log(this.teamLead, this.selectedMembers, this.selectedProjects);
    this.m.teamAdd(this.dataTeam).subscribe(res => {

      // Show the response from the web service
      console.log(res as string);

      // Extract the team identifier
      let teamId = res as string;
      teamId = teamId.replace('Team ', '');
      teamId = teamId.replace(' added successfully', '');
      console.log(teamId);

      // Navigate to the team detail
      this.router.navigate(['/teamView', teamId]);
    });

  }
}
