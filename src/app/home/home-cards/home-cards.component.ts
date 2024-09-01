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
    console.log(this.Cards);
  }

}


