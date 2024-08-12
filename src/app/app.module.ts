import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HomeServiceComponent } from './home/home-service/home-service.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeCardsComponent } from './home/home-cards/home-cards.component';
import { BriefComponent } from './home/brief/brief.component';
import { BlogPostComponent } from './home/blog-post/blog-post.component';
import { FooterDiscreptionComponent } from './footer/footer-discreption/footer-discreption.component';
import { FooterCopyrightComponent } from './footer/footer-copyright/footer-copyright.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ShowCasesComponent } from './show-cases/show-cases.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    HomeServiceComponent,
    HomeAboutComponent,
    HomeCardsComponent,
    BriefComponent,
    BlogPostComponent,
    FooterDiscreptionComponent,
    FooterCopyrightComponent,
    DashBoardComponent,
    ShowCasesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
