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
    this.HomeBriefHeader = this.HomeBriefFromParent.Contents[0].data.header;
    this.HomeBriefImage = this.HomeBriefFromParent.Contents[0].data.homeBriefImage.image;
  }
  onNavigate(){
    this.router.navigate(['/contact']);
  }

}
