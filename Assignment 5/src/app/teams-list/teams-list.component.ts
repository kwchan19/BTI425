import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "../data-manager-service";
import { Team } from "../team";
import { Router } from '@angular/router';
import { Employee } from "../employee";

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  teams: Team[];
  

  constructor(private m: DataManagerService, private router: Router) { 
   
  }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.m.getTeams().subscribe(teams => this.teams = teams);
  }

  select(em: Team){
    this.router.navigate(['/teamView',em._id]);
  }

  

}
