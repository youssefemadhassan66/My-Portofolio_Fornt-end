import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrl: './contact-header.component.css'
})
export class ContactHeaderComponent implements OnInit{
  @Input() ContactHeaderSectionFromParent:any;
  header: string = '';
  video: any;
  constructor() { }
  ngOnInit(): void {

    this.header =  'Reach Out';
    this.video = 'assets/images/4141099.jpg';

  }
}
// @Input() ContactHeaderFromParent: any;
//   header: string = '';
//   video: any;
//   ngOnInit(): void {
//     console.log('Contact Header is ' +  this.ContactHeaderFromParent)
//     if (this.ContactHeaderFromParent) {
//       this.header = this.ContactHeaderFromParent.Contents[0].data?.header || '';
//       this.video = this.ContactHeaderFromParent.Contents[0].data?.contactHeaderImage?.video || '';

//     } else {
//       console.warn('HomeHeaderFromParent or its Contents are undefined.');
//     }
//   }
