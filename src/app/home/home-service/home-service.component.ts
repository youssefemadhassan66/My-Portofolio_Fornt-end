import { Component ,Input,OnInit} from '@angular/core';
import { HostListener } from '@angular/core';
import { handleScroll } from '../home.animation';
import { Router } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrl: './home-service.component.css'
})
export class HomeServiceComponent implements OnInit {


  constructor(private router:Router){}
  @Input() HomeServicesFromParent :any;
  Header :string ='';
  description : string = '';
  image: any;

  ngOnInit(): void {
    this.Header = this.HomeServicesFromParent.Contents[0].data.header;
    this.description = this.HomeServicesFromParent.Contents[0].data.description;
    this.image = this.HomeServicesFromParent.Contents[0].data.homeServicesImage.image;
  }
  onNavigate(){
    this.router.navigate(['/showcases']);
  }


  @HostListener('window:scroll', ['$event'])
    onScroll(event: Event): void {
     handleScroll();
  }
}
