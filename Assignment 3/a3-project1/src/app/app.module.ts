import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer.component';
import { AboutComponent } from './about.component';
import { GlobalPageHeaderComponent } from './GlobalHeader.component';
import { ServiceComponent } from './service.component';
import { BlogComponent } from './blog.component';
import { ContactComponent } from './contact.component';
import { NotFoundComponent } from './NotFound.component';
import { GalleryComponent } from './gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    GlobalPageHeaderComponent,
    ServiceComponent,
    BlogComponent,
    ContactComponent,
    NotFoundComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
