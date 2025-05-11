import { Component ,Input,OnInit} from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Router } from '@angular/router';
@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrl: './brief.component.css'
})
export class BriefComponent implements OnInit{
  @Input() HomeBriefFromParent:any;
  HomeBriefHeader:string = ''
  HomeBriefImage:any;
  constructor(private router:Router){};
  ngOnInit(): void {
    this.HomeBriefHeader = ' Drop me a message, and I will get back to you as soon as possible.';
    this.HomeBriefImage = 'assets/images/home_berif.jpg';
  }
  onNavigate(){
    this.router.navigate(['/contact']);
  }

}
