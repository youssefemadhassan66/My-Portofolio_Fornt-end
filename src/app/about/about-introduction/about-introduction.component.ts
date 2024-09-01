import { Component,Input ,OnInit} from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-about-introduction',
  templateUrl: './about-introduction.component.html',
  styleUrl: './about-introduction.component.css'
})
export class AboutIntroductionComponent implements OnInit{
 @Input() AboutIntroductionFromParent :any;
   Header :string ='';
   description : string = '';
   image: any;

  ngOnInit(): void {
    this.Header = this.AboutIntroductionFromParent.Contents[0].data.header;
    this.description = this.AboutIntroductionFromParent.Contents[0].data.description;
    this.image = this.AboutIntroductionFromParent.Contents[0].data.AboutIntroductionImage.image;
  }
}
