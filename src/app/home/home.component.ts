import { AfterViewInit, Component,OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { handleScroll } from './home.animation';
import { HomeDataService } from '../services/home-data.service';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{

  HomeSectionsData :any[] = [];
  HomeAboutSection :any;
  HomeServicesSection : any;
  HomeCardSection:any;
  HomeBlogSection:any;
  HomeBriefSection:any;
  HomeHeaderSection:any;
  constructor(private HomeData:HomeDataService){}

  ngOnInit(): void {
    AOS.init();
    this.HomeData.setPageParam('home');
    this.HomeData.getData().subscribe(data=>{
      this.HomeSectionsData = data;
      this.findHomeSections();
    });

    this.HomeData.setPageParam('home');
  }

  findHomeSections() {
    this.HomeHeaderSection =  this.HomeSectionsData.find(item => item.title === 'Home-Header-section');
    this.HomeAboutSection =  this.HomeSectionsData.find(Section => Section.title === 'Home-about-section');
    this.HomeBriefSection =  this.HomeSectionsData.find(item => item.title === 'Home-brief-section');
    this.HomeBlogSection =  this.HomeSectionsData.find(item => item.title === 'Home-blogs-section');
    this.HomeCardSection =  this.HomeSectionsData.find(item => item.title === 'Home-cards-section');
    this.HomeServicesSection =  this.HomeSectionsData.find(item => item.title === 'Home-services-section');

  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
   handleScroll();
}


}
