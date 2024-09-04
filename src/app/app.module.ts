import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
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
import { ShowCasesComponent } from './show-cases/show-cases.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeDashboardComponent } from './dash-board/home-dashboard/home-dashboard.component';
import { AboutDashboardComponent } from './dash-board/about-dashboard/about-dashboard.component';
import { NavDashboardComponent } from './dash-board/nav-dashboard/nav-dashboard.component';
import { AboutIntroductionComponent } from './about/about-introduction/about-introduction.component';
import { AboutprofessionalBackgroundComponent } from './about/aboutprofessional-background/aboutprofessional-background.component';
import { AboutProjectsComponent } from './about/about-projects/about-projects.component';
import { AboutGoalsComponent } from './about/about-goals/about-goals.component';
import { ContactIntroductionFormComponent } from './contact/contact-introduction-form/contact-introduction-form.component';
import { ContactDirctlyComponent } from './contact/contact-dirctly/contact-dirctly.component';
import { ShowcasesIntridcutionComponent } from './show-cases/showcases-intridcution/showcases-intridcution.component';
import { ShowcasesSectionsComponent } from './show-cases/showcases-sections/showcases-sections.component';
import { ShowcasesContactComponent } from './show-cases/showcases-contact/showcases-contact.component';
import { ShowcasesDashboardComponent } from './dash-board/showcases-dashboard/showcases-dashboard.component';
import { ContactDashboardComponent } from './dash-board/contact-dashboard/contact-dashboard.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { AboutHeaderComponent } from './about/about-header/about-header.component';
import { ContactHeaderComponent } from './contact/contact-header/contact-header.component';
import { ShowcasesHeaderComponent } from './show-cases/showcases-header/showcases-header.component';



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
    ShowCasesComponent,
    LoginFormComponent,
    HomeDashboardComponent,
    AboutDashboardComponent,
    NavDashboardComponent,
    AboutIntroductionComponent,
    AboutprofessionalBackgroundComponent,
    AboutProjectsComponent,
    AboutGoalsComponent,
    ContactIntroductionFormComponent,
    ContactDirctlyComponent,
    ShowcasesIntridcutionComponent,
    ShowcasesSectionsComponent,
    ShowcasesContactComponent,
    ShowcasesDashboardComponent,
    ContactDashboardComponent,
    HomeHeaderComponent,
    AboutHeaderComponent,
    ContactHeaderComponent,
    ShowcasesHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
