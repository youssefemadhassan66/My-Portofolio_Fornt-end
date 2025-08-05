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
         "sectionImage": {
            "image" : "/assets/imagespexels-canvastudio-3153204.jpg"
        },
        "sectionLink": "https://github.com/Exodia-OS/exodia-os.github.io"
      },

      {
        "sectionTitle": "E-commerce Store",
        "sectionDescription": "This project is a application that fetches product data from a fake store API, displays products, allows filtering, pagination, and cart functionality like Product Display: Fetches product data from Fake Store API., Displays products in a card format with image, title, price, and buttons to add to cart or view details.",
         "sectionImage": {
            "image" : "./assets/imagespexels-canvastudio-3153204.jpg"
        },
        "sectionLink": "https://github.com/youssefemadhassan66/NTI-STORE-API"
      },

      {
        "sectionTitle": "Chess Game ",
        "sectionDescription": "Made a chess game between 2 players using HTML , CSS , JaveScript made the board and the functionality for every piece to move on the board some another functions that are associated to chess rules like double moving for pawns and check for the king ",
         "sectionImage": {
            "image" : "/assets/imagespexels-canvastudio-3153204.jpg"

        },
        "sectionLink": "https://github.com/youssefemadhassan66/Chess-Game"
      },

      {
        "sectionTitle": " Steel-Express ",
        "sectionDescription": "An The Inventory Management System (IMS) integrates RFID, barcode scanning, and real-time analytics for comprehensive stock tracking and Automated triggers within the IMS initiate replenishment actions based on predefined thresholds, minimizing holding costs and preventing shortages. ",
         "sectionImage": {
            "image" : "/assets/imagespexels-canvastudio-3153204.jpg"

        },
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
