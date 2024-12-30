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
  Cards:any[]=[];


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


