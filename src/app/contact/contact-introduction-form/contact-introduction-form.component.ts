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
      name:new FormControl(''),
      subject:new FormControl(''),
      email : new FormControl('',),
      message : new FormControl(''),
    });

    this.Header = 'Reach Out'
    this.Description = 'Send me an email';
    this.Image = '3094102.jpg';
  }

  onSFormSubmit() {
    const mailFormData = {
      name: this.MailMeForm.get('name')?.value,
      subject: this.MailMeForm.get('subject')?.value,
      email: this.MailMeForm.get('email')?.value,
      message: this.MailMeForm.get('message')?.value
    };



    this.MailData.submitMessage(mailFormData).subscribe(
      response => {
        console.log('Form submitted successfully');
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }




}
