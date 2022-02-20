import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataManagerService } from '../data-manager.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from "@angular/common";
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [DataManagerService, DatePipe]
})
export class ProjectsComponent implements OnInit {
  proj: Project[];

  constructor(private m: DataManagerService, private router: Router,private http: HttpClient, private dp: DatePipe) {

  }

  ngOnInit() {
    this.http.get<Project[]>('https://lit-coast-73093.herokuapp.com/projects').subscribe(res=>{
      this.proj=res;
    });
  }

  select(em: Project){
    this.router.navigate(['/projectDetail',em._id]);
  }

}