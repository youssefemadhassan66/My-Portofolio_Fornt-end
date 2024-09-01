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
    this.AboutCardHeader = this.AboutProjectsFromParent.Contents[0].data.header
    this.Cards = this.AboutProjectsFromParent.Contents[1].data.cards


  }

  onGitLink(){

  }
  onDownloadCv(){
    window.location.href = ' https://drive.google.com/file/d/1jvLQp0OY_vNYY6lVhALFltBNhuJ2NrN6/view?usp=drive_link';
  }
  navigationLink(url:string){
    if (url) {
      window.open(url, '_blank');
    }

  }

}
