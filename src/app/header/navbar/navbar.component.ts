import { Component ,OnInit} from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  ngOnInit(): void {
    AOS.init();

  }
  brand_logo = '/assets/icons/logo.svg';
  navLinks = [
    {path:"/home",label:"Home"},
    {path:"/about",label:"About"},
    {path:"/contact",label:"Contact me"},
    {path:"/showcases",label:"Services"}
  ]
}
