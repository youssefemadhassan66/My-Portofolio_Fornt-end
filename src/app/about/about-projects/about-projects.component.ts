import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-about-projects',
  templateUrl: './about-projects.component.html',
  styleUrl: './about-projects.component.css'
})
export class AboutProjectsComponent implements OnInit{
  @Input() AboutProjectsFromParent :any;
  Card:any[]=[]

  ngOnInit(): void {
      
  }
//  ngOnInit(): void {
//    this.Header = this.AboutIntroductionFromParent.Contents[0].data.header;
//    this.description = this.AboutIntroductionFromParent.Contents[0].data.description;
//    this.image = this.AboutIntroductionFromParent.Contents[0].data.homeAboutImage;
//  }


}
