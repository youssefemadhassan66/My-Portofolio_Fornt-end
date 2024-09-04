import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-about-projects',
  templateUrl: './about-projects.component.html',
  styleUrl: './about-projects.component.css'
})
export class AboutProjectsComponent implements OnInit{
  constructor(router:Router){}
  @Input() AboutProjectsFromParent :any;
  AboutCardHeader:string='';
  Cards:any[]=[];
  ngOnInit(): void {
    this.AboutCardHeader = this.AboutCardHeader ? this.AboutProjectsFromParent.Contents[0].data.header : 'Projects'
    this.Cards = this.AboutProjectsFromParent.Contents[1].data.cards

  }



  navigationLink(url:string){
    if (url) {
      window.open(url, '_blank');
    }

  }

}
