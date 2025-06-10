import { Component, Input, AfterViewInit } from '@angular/core';
import { headerTyping } from '../../header/Header.animation';
import { Router } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent implements AfterViewInit {
  @Input() HomeHeaderFromParent: any;
  header: string = 'joe emad ';
  video: string = '/assets/images/Mian.mp4';

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    AOS.init();

    // Wait until view is rendered
    setTimeout(() => {
      this.header = this.HomeHeaderFromParent?.Contents?.[0]?.data?.header || '';
      const wordsArray = this.header.split(" ");
      const fallbackArray = [
        "My name is Youssef",
        "Fullstack developer"
      ];

      // If header is valid and not empty, use it. Otherwise use fallback.
      const finalArray = wordsArray.length > 0 && wordsArray[0] !== '' ? wordsArray : fallbackArray;

      headerTyping(finalArray);
    });
  }

  onNavigateAbout() {
    this.router.navigate(['/about']);
  }

  onNavigateServices() {
    this.router.navigate(['/contact']);
  }
}
