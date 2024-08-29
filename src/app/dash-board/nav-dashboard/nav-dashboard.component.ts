import { Component } from '@angular/core';
import { AuthService } from '../../services/authService/auth.service';
@Component({
  selector: 'app-nav-dashboard',
  templateUrl: './nav-dashboard.component.html',
  styleUrl: './nav-dashboard.component.css'
})
export class NavDashboardComponent {
  constructor(private authService: AuthService) { }


  logout(){
    this.authService.logOut();
  }
  navLinks = [
    {path:"/homeDashboard",label:"Home Dashboard"},
    {path:"/aboutDashboard",label:"About Dashboard"},
    {path:"/contactDashboard",label:"Contact Dashboard"},
    {path:"/showCasesDashboard",label:"Show Cases Dashboard"},

  ]
}
