import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  brand_logo = '/assets/icons/logo.svg';
  navLinks = [
    {path:"/home",label:"Home"},
    {path:"/about",label:"About"},
    {path:"/contact",label:"Contact me"},
    {path:"/showcases",label:"showcases"}
  ]
}
