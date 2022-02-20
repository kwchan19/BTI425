import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { DataManagerService } from '../data-manager.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  proj: Project;

  constructor(private route: ActivatedRoute, private router: Router, private m: DataManagerService) { 
    let id = this.route.snapshot.params['_id'];
    this.proj = this.m.getProj(id);
  }
    

  
  ngOnInit() {
  }

}