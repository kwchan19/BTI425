import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataManagerService {
  emp: Employee[];
  proj: Project[];

  constructor(private http: HttpClient) { 
    this.http.get<Employee[]>('https://lit-coast-73093.herokuapp.com/employees').subscribe(data=>{
      this.emp = data;
      console.log(this.emp);
    });
    this.http.get<Project[]>('https://lit-coast-73093.herokuapp.com/projects').subscribe(data2=>{
      this.proj = data2;
    });

  }

  getEmp(c: String){
    return this.emp.find(function(d:Employee){
      return d._id == c;
    });
  }
  
  getProj(f: String){
    return this.proj.find(function(e:Project){
      return e._id == f;
    });
  }

  getEmployees(){
    return this.emp;
  }

  getProjects(){
    return this.proj;
  }
  

}