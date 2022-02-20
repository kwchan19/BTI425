import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { CustomersComponent } from './customers.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { CustomerDeleteComponent } from './customer-delete.component';
import { CustomerCreateComponent } from './customer-create.component';
import { CustomerEditComponent } from './customer-edit.component';
import { NavBarComponent } from './nav-bar.component';
import { FooterComponent } from './footer.component';
import { NotFoundComponent } from './not-found.component';
import { ContentComponent } from './content.component';
import { DataManagerService } from './data-manager.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomersComponent,
    CustomerDetailComponent,
    CustomerDeleteComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
