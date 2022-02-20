import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { TeamListComponent } from './team-list.component';
import { TeamDetailComponent } from './team-detail.component';
import { TeamCreateComponent } from './team-create.component';
import { TeamEditComponent } from './team-edit.component';
import { LoginComponent } from './login.component';
import { EmployeesOpenComponent } from './employees-open.component';
import { EmployeesProtectedComponent } from './employees-protected.component';
import { TokenComponent } from './token.component';
import { GuardAuthService } from './guard-auth.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'teams', component: TeamListComponent },
  { path: 'team/detail/:_id', component: TeamDetailComponent },
  { path: 'team/create', component: TeamCreateComponent },
  { path: 'team/edit/:_id', component: TeamEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employees/open', component: EmployeesOpenComponent },
  { path: 'employees/protected', component: EmployeesProtectedComponent, canActivate: [GuardAuthService] },
  { path: 'token', component: TokenComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
