import { Component ,OnInit} from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  isToggled:boolean=false;
  ngOnInit(): void {
    AOS.init();

  }
  brand_logo = '/assets/icons/youussef logo.jpg';
  navLinks = [
    {path:"/home",label:"Home"},
    {path:"/about",label:"About"},
    {path:"/contact",label:"Contact me"},
    {path:"/showcases",label:"Services"}
  ]

  toggleButtons = [
    'fa-solid fa-bars',
    'fa-solid fa-xmark',
  ]
  toggleClass() {
    this.isToggled = !this.isToggled;
  }

}
