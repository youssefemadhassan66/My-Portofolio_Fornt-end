import { Component ,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-dirctly',
  templateUrl: './contact-dirctly.component.html',
  styleUrl: './contact-dirctly.component.css'
})
export class ContactDirctlyComponent implements OnInit{

  @Input() ContactDirectFormParent:any;
  Header:string='';
  Description:string = '';
  Number :string='';
  Mail:string = '';

  ngOnInit(){
    this.Header = 'Contact me Directly';
    this.Description =  'Reach me out any time';
    this.Number = '01063623735';
    this.Mail = 'youssefemadhassan66@gmail.com';
  }

}
