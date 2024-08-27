import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-dashboard',
  templateUrl: './nav-dashboard.component.html',
  styleUrl: './nav-dashboard.component.css'
})
export class NavDashboardComponent {

  navLinks = [
    {path:"/homeDashboard",label:"Home Dashboard"},
    {path:"/aboutDashboard",label:"About Dashboard"},
  ]

}
