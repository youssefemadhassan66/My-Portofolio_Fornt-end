import { Component, Input, OnInit } from '@angular/core';
import { headerTyping } from '../../header/Header.animation';
import { Router } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent implements OnInit {

  @Input() HomeHeaderFromParent: any;
  header: string = '';
  video: any;


  constructor(private router:Router) {}
  ngOnInit(): void {
       AOS.init();
      this.header = this.HomeHeaderFromParent.Contents[0].data?.header || '';
      this.video = this.HomeHeaderFromParent.Contents[0].data?.homeHeaderImage?.video || '';

      const wordsArray = this.header.split(" ");
      const newArray:any = [];
      wordsArray.forEach(word => {newArray.push(word);});
      headerTyping(newArray);
  }

  onNavigateAbout(){
    this.router.navigate(['/about']);
  }
  onNavigateServices(){
    this.router.navigate(['/contact'])
  }

}
