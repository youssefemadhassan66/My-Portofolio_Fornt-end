import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {

  navLinks = [
    {path:"/homeDashboard",label:"Home Dashboard"},
    {path:"/aboutDashboard",label:"About Dashboard"},

  ]
}
