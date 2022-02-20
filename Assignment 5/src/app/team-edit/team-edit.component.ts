import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager-service';
import { Employee } from '../employee';
import { Project } from '../project';
import { Team } from '../team';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {

  t: Team;

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
    
  }

  

  getData(): void {
    this.m.getEmployees().subscribe(employees => this.employees = employees);
    this.m.getProjects().subscribe(projects => this.projects = projects);
  }

  teamGetById(){
    this.m.teamGetById(this.dataTeam._id).subscribe(o => {

      //this.selectedMembers = this.dataTeam.Employees.map(e => e._id);
      
    });
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



