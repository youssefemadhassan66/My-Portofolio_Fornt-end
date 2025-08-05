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
    this.Header = 'About me';
    this.description = 'Hello my name is Youssef Emad, a passionate Full-Stack Developer with a strong foundation in modern web technologies ,I honed my skills in various programming languages and developed a deep understanding of software development. My curiosity for solving complex problems led me to specialize in Full-Stack Development \n, I am  committed to turning ideas into reality by crafting seamless web experiences and leveraging data to drive decision-making. ';
    this.image = './assets/images/youssefff.jpg';
  }
}
