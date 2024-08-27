import { AfterViewInit, Component,OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { handleScroll } from './home.animation';
import { HomeDataService } from '../services/home-data.service';
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
  constructor(private HomeData:HomeDataService){}

  ngOnInit(): void {
    this.HomeData.setPageParam('home');
    this.HomeData.getData().subscribe(data=>{
      this.HomeSectionsData = data;
      this.findHomeAbout();
      this.findHomeServices();
      this.findHomeCards();
      this.findHomeBlogs();
      this.findHomeBrief();
      console.log(this.HomeSectionsData);
    });

    this.HomeData.setPageParam('home');
  }

  findHomeAbout() {
    this.HomeAboutSection =  this.HomeSectionsData.find(Section => Section.title === 'Home-about-section');
  }
   findHomeServices() {
    this.HomeServicesSection =  this.HomeSectionsData.find(item => item.title === 'Home-services-section');
  }
  findHomeCards() {
    this.HomeCardSection =  this.HomeSectionsData.find(item => item.title === 'Home-cards-section');
  }
  findHomeBlogs() {
    this.HomeBlogSection =  this.HomeSectionsData.find(item => item.title === 'Home-blogs-section');
  }
  findHomeBrief() {
    this.HomeBriefSection =  this.HomeSectionsData.find(item => item.title === 'Home-brief-section');
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
   handleScroll();
}


}
