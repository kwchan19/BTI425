import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'teamCreate', component: TeamCreateComponent },
  { path: 'teamEdit/:id', component: TeamEditComponent },
  { path: 'teamView/:id', component: TeamViewComponent },
  { path: 'teamsList', component: TeamsListComponent },
  { path: 'createAccount', component: CreateAccountComponent},
  { path: 'login', component: LoginComponent },
  { path: '',redirectTo:'home', pathMatch:"full" },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
