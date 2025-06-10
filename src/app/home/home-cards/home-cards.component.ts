import { Component, Input ,OnInit} from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.css'
})
export class HomeCardsComponent implements OnInit{

  @Input() HomeCardsFromParent:any;
  HomeCardHeader:string='';

  Cards:any[] =[
      {
        "cardTitle": "Exodia-OS Website:",
        "cardDescription": "Exodia-OS is a customized Arch-based Linux distribution designed for cybersecurity experts. I played a key role in developing the website, focusing on creating a user-friendly interface that aligns with the technical nature of the OS.",
        "cardLink": "https://github.com/Exodia-OS/exodia-os.github.io"
      },
      {
        "cardTitle": "E-commerce Store",
        "cardDescription": "This project is a application that fetches product data from a fake store API, displays products, allows filtering, pagination, and cart functionality like Product Display: Fetches product data from Fake Store API., Displays products in a card format with image, title, price, and buttons to add to cart or view details.",
        "cardLink": "https://github.com/youssefemadhassan66/NTI-STORE-API"
      },
      {
        "cardTitle": "Chess Game ",
        "cardDescription": "Made a chess game between 2 players using HTML , CSS , JaveScript made the board and the functionality for every piece to move on the board some another functions that are associated to chess rules like double moving for pawns and check for the king ",
        "cardLink": "https://github.com/youssefemadhassan66/Chess-Game"
      }
    ]
  ngOnInit(): void {
    this.HomeCardHeader = this.HomeCardsFromParent.Contents[0].data.header
    this.Cards = this.HomeCardsFromParent.Contents[1].data.Card
  }

  onDownloadCv(){
    window.location.href = ' https://drive.google.com/file/d/1jvLQp0OY_vNYY6lVhALFltBNhuJ2NrN6/view?usp=drive_link';
  }
  navigationLink(url:string){
    if (url) {
      window.open(url, '_blank');
    }

  }


}


