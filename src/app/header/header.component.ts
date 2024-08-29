
import { Component, OnInit } from '@angular/core';
import { headerTyping } from './Header.animation';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  vidPath = '../assets/images/Video.mp4';
  imgPath = '../images/Default_A_cinematic_highcontrast_wideangle_photograph_of_a_maj_2.jpg';
  ngOnInit(): void {
  }
}
