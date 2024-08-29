import { Component, Input, OnInit } from '@angular/core';
import { headerTyping } from '../../header/Header.animation';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent implements OnInit {

  @Input() HomeHeaderFromParent: any;
  header: string = '';
  video: any;

  constructor() { }

  ngOnInit(): void {
    if (this.HomeHeaderFromParent && this.HomeHeaderFromParent.Contents && this.HomeHeaderFromParent.Contents[0]) {
      this.header = this.HomeHeaderFromParent.Contents[0].data?.header || '';
      this.video = this.HomeHeaderFromParent.Contents[0].data?.homeHeaderImage?.video || '';
      headerTyping(this.header);
    } else {
      console.warn('HomeHeaderFromParent or its Contents are undefined.');
    }
  }

}
