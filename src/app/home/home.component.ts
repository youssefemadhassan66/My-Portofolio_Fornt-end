import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { handleScroll } from './home.animation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @HostListener('window:scroll', ['$event'])
    onScroll(event: Event): void {
     handleScroll();
  }

}
