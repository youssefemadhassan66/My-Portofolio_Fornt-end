import { Component ,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-showcases-sections',
  templateUrl: './showcases-sections.component.html',
  styleUrl: './showcases-sections.component.css'
})
export class ShowcasesSectionsComponent implements OnInit{
  @Input() showCasesSectionsFromParent:any;
  Sections:any[]= [
      {
        "sectionTitle": "Exodia-OS Website:",
        "sectionDescription": "Exodia-OS is a customized Arch-based Linux distribution designed for cybersecurity experts. I played a key role in developing the website, focusing on creating a user-friendly interface that aligns with the technical nature of the OS.",
         "image" : "./assets/images/Showcase_1.png",
        "sectionLink": "https://github.com/Exodia-OS/exodia-os.github.io"
      },

      {
        "sectionTitle": "Revin Roams",
        "sectionDescription": "TRiven Roams is a secure and dynamic web platform designed to streamline the tour booking experience. It offers features for both regular users and administrators, making it a comprehensive solution for managing and exploring tours. Features User Features",
        "image" : "./assets/images/Showcase_3.png",

        "sectionLink": "https://github.com/youssefemadhassan66/Riven-Roams-Tours-website-"
      },

      {
        "sectionTitle": "Chess Game ",
        "sectionDescription": "Made a chess game between 2 players using HTML , CSS , JaveScript made the board and the functionality for every piece to move on the board some another functions that are associated to chess rules like double moving for pawns and check for the king ",
         "image" : "./assets/images/Showcase_2.png",
        "sectionLink": "https://github.com/youssefemadhassan66/Chess-Game"
      },

      {
        "sectionTitle": " Steel-Express ",
        "sectionDescription": "An The Inventory Management System (IMS) integrates RFID, barcode scanning, and real-time analytics for comprehensive stock tracking and Automated triggers within the IMS initiate replenishment actions based on predefined thresholds, minimizing holding costs and preventing shortages. ",
         "image" : "./assets/images/Showcase_4.png",
        "sectionLink": "https://github.com/youssefemadhassan66/Steel-Express"
      }
    ];


  SectionImages:any[]= [];
  ngOnInit(): void {


  }
  navigationLink(url:string){
    if (url) {
      window.open(url, '_blank');
    }

  }


}
