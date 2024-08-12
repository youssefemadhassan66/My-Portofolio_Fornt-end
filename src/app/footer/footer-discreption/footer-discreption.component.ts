import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-discreption',
  templateUrl: './footer-discreption.component.html',
  styleUrl: './footer-discreption.component.css'
})
export class FooterDiscreptionComponent {
  brand_logo = '/assets/icons/logo.svg';
  email = 'Youssefemadhassan@64gamil.com';
  number = '01501598998';
  links = [{
    link:'https://github.com/youssefemadhassan66',
    icon: 'fa-brands fa-lg fa-github'
  },
  {
    link:'https://www.linkedin.com/in/youssef-emad-037570250/',
    icon:'fa-brands fa-lg fa-linkedin'
  },
  {
    link:'https://discordapp.com/users/822765082278494218',
    icon:'fa-brands fa-lg  fa-discord'
  },
  {
    link:'https://www.facebook.com/youssefemadhassan66',
    icon:'fa-brands fa-lg fa-facebook'
  }

];

}
