import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { TeamListComponent } from './team-list.component';
import { TeamDetailComponent } from './team-detail.component';
import { TeamCreateComponent } from './team-create.component';
import { TeamEditComponent } from './team-edit.component';
import { NotFoundComponent } from './not-found.component';
import { DataManagerService } from './data-manager.service';

import { JwtModule } from "@auth0/angular-jwt";
import { LoginComponent } from './login.component';

import { AuthService } from './auth.service';
import { GuardAuthService } from './guard-auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptTokenService } from "./intercept-token.service";
import { EmployeesOpenComponent } from './employees-open.component';
import { EmployeesProtectedComponent } from './employees-protected.component';
import { TokenComponent } from './token.component';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TeamListComponent,
    TeamDetailComponent,
    TeamCreateComponent,
    TeamEditComponent,
    NotFoundComponent,
    LoginComponent,
    EmployeesOpenComponent,
    EmployeesProtectedComponent,
    TokenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        authScheme: 'JWT'
      }
    })
  ],
  providers: [
    DataManagerService,
    AuthService,
    GuardAuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptTokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
