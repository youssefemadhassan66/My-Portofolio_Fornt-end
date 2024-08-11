import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { handleScroll } from '../home.animation';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrl: './home-service.component.css'
})
export class HomeServiceComponent {
  @HostListener('window:scroll', ['$event'])
    onScroll(event: Event): void {
     handleScroll();
  }
}
