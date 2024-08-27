import { Component ,Input,OnInit} from '@angular/core';
import { HostListener } from '@angular/core';
import { handleScroll } from '../home.animation';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrl: './home-service.component.css'
})
export class HomeServiceComponent implements OnInit {



  @Input() HomeServicesFromParent :any;
  Header :string ='';
  description : string = '';
  image: any;

  ngOnInit(): void {
    this.Header = this.HomeServicesFromParent.Contents[0].data.header;
    this.description = this.HomeServicesFromParent.Contents[0].data.description;
    this.image = this.HomeServicesFromParent.Contents[0].data.homeServicesImage;
  }

  @HostListener('window:scroll', ['$event'])
    onScroll(event: Event): void {
     handleScroll();
  }
}
