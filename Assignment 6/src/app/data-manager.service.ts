import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { catchError, map, tap } from 'rxjs/operators';
import { Employee, Project, Position, Team, UserAccount } from "./vms";

@Injectable()
export class DataManagerService {

  constructor(
    private teamsApi: HttpClient
  ) { }

  // Properties

  private url: string = 'https://lit-coast-73093.herokuapp.com/';

  // Methods
  // In any of the methods below, can use console.log() 

  // ############################################################
  // Team

  teamGetAll(): Observable<Team[]> {
    return this.teamsApi.get<Team[]>(`${this.url}teams`);
  }

  teamGetById(id: string): Observable<Team> {
    return this.teamsApi.get<Team>(`${this.url}team/${id}`)
      .pipe(map(wrapper => wrapper[0]));
  }

  teamAdd(newItem: Team): Observable<any> {
    return this.teamsApi.post<any>(`${this.url}teams`, newItem)
      .pipe(map(wrapper => wrapper.message));
  }

  teamEdit(newItem: Team): Observable<any> {
    return this.teamsApi.put<any>(`${this.url}team/${newItem._id}`, newItem)
      .pipe(map(wrapper => wrapper.message));
  }

  // ############################################################
  // Project

  projectGetAll(): Observable<Project[]> {
    return this.teamsApi.get<Project[]>(`${this.url}projects`);
  }

  // ############################################################
  // Employee

  employeeGetAll(): Observable<Employee[]> {
    return this.teamsApi.get<Employee[]>(`${this.url}employees`);
  }

}
