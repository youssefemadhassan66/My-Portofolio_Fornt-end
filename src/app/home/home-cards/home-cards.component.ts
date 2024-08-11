import { Component } from '@angular/core';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrl: './home-cards.component.css'
})
export class HomeCardsComponent {

  cards = [
    {
      title: 'Web Developer',
      description: 'Built by an expert, I provide high-quality Squarespace plugins, snippets, and support that will help take your Squarespace site further.',
      buttonDescription: 'Join us'
    },
    {
      title: 'Card 1',
      description: 'This is card 1.',
      buttonDescription: 'View All Plugins'
    },
    {
      title: 'Card 1',
      description: 'This is card 1.',
      buttonDescription: 'View All Plugins'
    },
    {
      title: 'Card 1',
      description: 'This is card 1.',
      buttonDescription: 'View All Plugins'
    },
    {
      title: 'Card 1',
      description: 'This is card 1.',
      buttonDescription: 'View All Plugins'
    },
    {
      title: 'Card 1',
      description: 'This is card 1.',
      buttonDescription: 'View All Plugins'
    }

  ]

}


