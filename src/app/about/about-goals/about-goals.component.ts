import { Component ,Input,OnInit} from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-about-goals',
  templateUrl: './about-goals.component.html',
  styleUrl: './about-goals.component.css'
})
export class AboutGoalsComponent implements OnInit{
  @Input() AboutGoalsFromParent :any;
  header:string = '';
  image:any;
  description:string = '';
  link:any;
  ngOnInit(): void {
    this.description = 'From an early age, technology has always intrigued me. I embarked on this journey by pursuing a degree in Computer Science, where I honed my skills in various programming languages and developed a deep understanding of software development. My curiosity for solving complex problems led me to specialize in Full-Stack Development and Data Science, enabling me to create comprehensive solutions that meet the needs of users and businesses alike .';
    this.header = 'My vision';
    this.image = './assets/images/5441840.jpg';
    this.link =  'https://drive.google.com/file/d/1jvLQp0OY_vNYY6lVhALFltBNhuJ2NrN6/view?usp=drive_link';
  }

  onDownloadCv(){
    window.location.href = this.link;
  }
  // https://drive.google.com/file/d/1jvLQp0OY_vNYY6lVhALFltBNhuJ2NrN6/view?usp=drive_link

}
