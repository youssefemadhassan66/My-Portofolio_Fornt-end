import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-about-projects',
  templateUrl: './about-projects.component.html',
  styleUrl: './about-projects.component.css'
})
export class AboutProjectsComponent implements OnInit{
  constructor(router:Router){}
  @Input() AboutProjectsFromParent :any;
  AboutCardHeader:string='';
  Cards:any[]=[
      {
        "ProjectTitle": "Exodia-OS Website:",
        "ProjectDescription": "Exodia-OS is a customized Arch-based Linux distribution designed for cybersecurity experts. I played a key role in developing the website, focusing on creating a user-friendly interface that aligns with the technical nature of the OS.",
        "ProjectGithubLink": "https://github.com/Exodia-OS/exodia-os.github.io",
        "ProjectHyperLink": "https://exodia-os.github.io/"
      },
      {
        "ProjectTitle": "E-commerce Store",
        "ProjectDescription": "This project is a application that fetches product data from a fake store API, displays products, allows filtering, pagination, and cart functionality like Product Display: Fetches product data from Fake Store API., Displays products in a card format",
        "ProjectGithubLink": "https://github.com/youssefemadhassan66/NTI-STORE-API",
        "ProjectHyperLink": null
      },
      {
        "ProjectTitle": " Steel-Express ",
        "ProjectDescription": "An The Inventory Management System (IMS) integrates RFID, barcode scanning, and real-time analytics for comprehensive stock tracking  and Automated triggers within the IMS initiate replenishment actions based on predefined thresholds, minimizing holding costs and preventing shortages. ",
        "ProjectGithubLink": "https://github.com/youssefemadhassan66/Steel-Express",
        "ProjectHyperLink": null
      },
      {
        "ProjectTitle": "Chess Game ",
        "ProjectDescription": "Made a chess game between 2 players using HTML , CSS , JaveScript made the board and the functionality for every piece to move on the board some another functions\nthat are associated to chess rules like double moving for pawns and check for the king\n ",
        "ProjectGithubLink": "https://github.com/youssefemadhassan66/Chess-Game",
        "ProjectHyperLink": null
      }
    ];
  ngOnInit(): void {
    this.AboutCardHeader =  'Projects';
  }



  navigationLink(url:string){
    if (url) {
      window.open(url, '_blank');
    }

  }

}
