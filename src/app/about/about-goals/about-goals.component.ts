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
    this.description = this.AboutGoalsFromParent.Contents[0].data.description;
    this.header = this.AboutGoalsFromParent.Contents[0].data.title;
    this.image = this.AboutGoalsFromParent.Contents[0].data.AboutGoalsImage.image;
    this.link =  this.AboutGoalsFromParent.Contents[0].data.link;
  }

  onDownloadCv(){
    window.location.href = this.link;
  }
  // https://drive.google.com/file/d/1jvLQp0OY_vNYY6lVhALFltBNhuJ2NrN6/view?usp=drive_link
}
