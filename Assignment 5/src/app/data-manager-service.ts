import { Injectable } from '@angular/core';
import { Team } from './team';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Project } from './project';
import { Employee } from './employee';
import { NgForm } from "@angular/forms";
import { map } from 'rxjs/operators';

import 'rxjs/add/operator/catch';

@Injectable()
export class DataManagerService {
    private url = 'https://lit-coast-73093.herokuapp.com';
    teams: Team[];
    projects: Project[];
    employees: Employee[];

    constructor(private http: HttpClient) { 
    }

    getTeams(): Observable<Team[]> {
        return this.http.get<Team[]>(`${this.url}/teams`)
      }
    
    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(`${this.url}/projects`)
    }
    
    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.url}/employees`)
    }

    //Single

    teamGetById(id: string) {
        return this.http.get<Team[]>(`${this.url}/team/${id}`);
    }

    teamAdd(newItem: Team): Observable<any> {
        return this.http.post<any>(`${this.url}/teams`, newItem)
          .pipe(map(wrapper => wrapper.message));
    }


}