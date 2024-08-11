import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BackgroundPhotoComponent } from './header/background-photo/background-photo.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HomeServiceComponent } from './home/home-service/home-service.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeCardsComponent } from './home/home-cards/home-cards.component';
import { BriefComponent } from './home/brief/brief.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BackgroundPhotoComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    HomeServiceComponent,
    HomeAboutComponent,
    HomeCardsComponent,
    BriefComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
