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
    this.Header = this.ContactDirectFormParent.Contents[0].data.header
    this.Description = this.ContactDirectFormParent.Contents[0].data.description;
    this.Number = this.ContactDirectFormParent.Contents[0].data.Number;
    this.Mail = this.ContactDirectFormParent.Contents[0].data.Mail;
  }

}
