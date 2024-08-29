import { Component,OnInit,Input} from '@angular/core';
import { FormGroup,Validators,FormControl,FormArray } from '@angular/forms';
import { HomeDataService } from '../../services/home-data.service';
@Component({
  selector: 'app-contact-introduction-form',
  templateUrl: './contact-introduction-form.component.html',
  styleUrl: './contact-introduction-form.component.css'
})
export class ContactIntroductionFormComponent {
  MailMeForm!:FormGroup;
  @Input() ContactIntroductionFormParent:any;
  Header:string='';
  Description:string = '';
  Image :any;

  constructor(private MailData:HomeDataService){}
  ngOnInit(){
    this.MailMeForm = new FormGroup({
      MailName:new FormControl(''),
      MailSubject:new FormControl(''),
      MailEmail : new FormControl('',),
      MailDescription : new FormControl(''),
    });

    this.Header = this.ContactIntroductionFormParent.Contents[0].data.header
    this.Description = this.ContactIntroductionFormParent.Contents[0].data.description;
    this.Image = this.ContactIntroductionFormParent.Contents[0].data.image;
  }

  onSFormSubmit(){

  }


}
