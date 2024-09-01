import { Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-about-header',
  templateUrl: './about-header.component.html',
  styleUrls: ['./about-header.component.css']
})
export class AboutHeaderComponent implements OnInit {
  @Input() AboutHeaderDataFromParent: any;
  header:string='';
  video:any;
  ngOnInit(): void {
    this.header = this.AboutHeaderDataFromParent.Contents[0]?.data?.header || '';
    this.video = this.AboutHeaderDataFromParent.Contents[0]?.data?.AboutHeaderImage?.video || '';
  }

}

