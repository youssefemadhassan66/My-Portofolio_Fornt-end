import { Component ,OnInit} from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { HomeDataService } from '../../services/home-data.service';
@Component({
  selector: 'app-contact-dashboard',
  templateUrl: './contact-dashboard.component.html',
  styleUrl: './contact-dashboard.component.css'
})
export class ContactDashboardComponent implements OnInit{
  ContactForm!:FormGroup;
  constructor(private ContactData:HomeDataService){}

  ngOnInit(){
    this.ContactForm = new FormGroup({
      contactHeaderTitle:new FormControl(''),
      contactHeaderImage:new FormControl(''),

      ContactIntroductionTitle : new FormControl('',),
      ContactIntroductionDescription : new FormControl(''),
      ContactIntroductionImage : new FormControl(null),

      ContactDirectlyTitle : new FormControl(null),
      ContactDescription : new FormControl(null),
      ContactDirectlyNumber : new FormControl(null),
      ContactDirectlyMail:new FormControl(null),

    });
    this.ContactData.setPageParam('contact');
  }


  onFileChange(event: any, formControlName: string) {

    const file = event.target.files[0];

      this.ContactForm.patchValue({ [formControlName]: file });

  }
  onSFormSubmit(){
    const formData = new FormData();
    const requestData ={
    sections: [
      {
        title: 'Contact-Header-section',
        Contents: [
          {
            title: 'contactHeader',
            type: 'header_paragraph',
            data: {
              header: this.ContactForm.get('contactHeaderTitle')?.value,
              contactHeaderImage:''
            }
          }
        ]
      },
      {
        title: 'Contact-Introduction-section',
        Contents:[
          {
            title:'ContactIntroduction',
            type:'custom',
            data:{
              header: this.ContactForm.get('ContactIntroductionTitle')?.value,
              description: this.ContactForm.get('ContactIntroductionDescription')?.value,
              ContactIntroductionImage:''
            }

          }
        ]
      },
      {
        title:'Contact-Directly-section',
        Contents:[
          {
            title:'contactDirectly',
            type:'header',
            data:{
              header: this.ContactForm.get('ContactDirectlyTitle')?.value,
              description: this.ContactForm.get('ContactDescription')?.value,
              Number:this.ContactForm.get('ContactDirectlyNumber')?.value,
              Mail:this.ContactForm.get('ContactDirectlyMail')?.value
            }
          }
        ]
      },

    ]
  }
  formData.append('requestData', JSON.stringify(requestData));

  const ContactIntroductionImage = this.ContactForm.get('ContactIntroductionImage')?.value;
  formData.append('ContactIntroductionImage', ContactIntroductionImage);

  const contactHeaderImage = this.ContactForm.get('contactHeaderImage')?.value;
  formData.append('contactHeaderImage', contactHeaderImage);
  this.ContactData.submitForm(formData).subscribe(
    response=>{
      console.log('Form submitted successfully' , response)
    },
    error => {
      console.error('There was an error!', error);
    });


}
}
