import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShowCasesComponent } from './show-cases/show-cases.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthService } from './services/authService/auth.service';
import { authGuard } from './guards/auth.guard';
import { HomeDashboardComponent } from './dash-board/home-dashboard/home-dashboard.component';
import { AboutDashboardComponent } from './dash-board/about-dashboard/about-dashboard.component';
import { ContactDashboardComponent } from './dash-board/contact-dashboard/contact-dashboard.component';
import { ShowcasesDashboardComponent } from './dash-board/showcases-dashboard/showcases-dashboard.component';
const routes: Routes = [
 {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginFormComponent},
  {path:'contact',component:ContactComponent},
  {path:'showcases',component:ShowCasesComponent},
  {path:'homeDashboard',component:HomeDashboardComponent,canActivate:[authGuard]},
  {path:'aboutDashboard',component:AboutDashboardComponent,canActivate:[authGuard]},
  {path:'contactDashboard',component:ContactDashboardComponent,canActivate:[authGuard]},
  {path:'showCasesDashboard',component:ShowcasesDashboardComponent,canActivate:[authGuard]},
  {path: '**', redirectTo: '/login'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
