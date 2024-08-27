import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrl: './home-about.component.css'
})
export class HomeAboutComponent implements OnInit{

  constructor() { }
  @Input() HomeAboutFromParent :any;
  Header :string ='';
  description : string = '';
  image: any;
  ngOnInit(): void {
    this.Header = this.HomeAboutFromParent.Contents[0].data.header;
    this.description = this.HomeAboutFromParent.Contents[0].data.description;
    this.image = this.HomeAboutFromParent.Contents[0].data.homeAboutImage;
    console.log('Image Path:', this.image);

  }


}
