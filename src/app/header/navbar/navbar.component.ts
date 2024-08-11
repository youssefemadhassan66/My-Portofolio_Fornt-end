import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navLinks = [
    {path:"/home",label:"Home"},
    {path:"/about",label:"About"},
    {path:"/contact",label:"Contact me"},
    {path:"/Showcases",label:"Show Cases"}
  ]
}
