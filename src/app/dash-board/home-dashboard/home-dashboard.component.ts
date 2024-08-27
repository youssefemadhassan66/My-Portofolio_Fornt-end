import { Component,OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeDataService } from '../../services/home-data.service';
import { response } from 'express';
@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrl: './home-dashboard.component.css'
})
export class HomeDashboardComponent implements OnInit{
  homeForm!:FormGroup;

  constructor(private HomeData:HomeDataService){}

  ngOnInit(){
    this.homeForm = new FormGroup({
      homeAboutTitle : new FormControl('',[Validators.required,Validators.minLength(2)]),
      homeAboutDescription : new FormControl('',[Validators.required,Validators.minLength(2)]),
      homeAboutImage : new FormControl(null),
      homeServicesTitle : new FormControl(null,[Validators.required,Validators.minLength(2)]),
      homeServicesDescription : new FormControl(null,[Validators.required,Validators.minLength(2)]),
      homeServicesImage : new FormControl(null),
      homeCardsTitle : new FormControl(null,[Validators.required,Validators.minLength(2)]),
      homeCards:new FormArray ([
        new FormGroup({
          cardTitle : new FormControl(null,[Validators.required,Validators.minLength(2)]),
          cardDescription : new FormControl(null,[Validators.required,Validators.minLength(2)]),
        })]),
      homeBriefTitle:new FormControl(null,[Validators.required,Validators.minLength(2)]),
      homeBriefImage:new FormControl(null),
      homeBlogs:new FormArray ([
        new FormGroup({
          homeBlogTitle : new FormControl(null,[Validators.required,Validators.minLength(2)]),
          homeBlogDescription : new FormControl(null,[Validators.required,Validators.minLength(2)]),
          homeBlogImage: new FormControl(null)
        })]),
    });
    this.HomeData.setPageParam('home');
  }


 get getCards(){
    return this.homeForm.get('homeCards') as FormArray;
  }

  addCard(){
    const control = <FormArray>this.homeForm.get('homeCards');
    control.push(new FormGroup({
      cardTitle : new FormControl(null,[Validators.required,Validators.minLength(2)]),
      cardDescription : new FormControl(null,[Validators.required,Validators.minLength(2)]),
      }));
  }

  get getBlogs(){
    return this.homeForm.get('homeBlogs') as FormArray;
  }
  addBlog(){
    const control = <FormArray>this.homeForm.get('homeBlogs');
    control.push(new FormGroup({
      homeBlogTitle  : new FormControl(null,[Validators.required,Validators.minLength(2)]),
      homeBlogDescription : new FormControl(null,[Validators.required,Validators.minLength(2)]),
      homeBlogImage: new FormControl(null)
      }));
  }



  onFileChange(event: any, formControlName: string, index: number = -1) {

    const file = event.target.files[0];
    if (index === -1) {
      this.homeForm.patchValue({ [formControlName]: file });
    } else {
      const control = (this.homeForm.get('homeBlogs') as FormArray).at(index);
      control.patchValue({ [formControlName]: file });
    }
  }


onSFormSubmit(){

 const formData = new FormData();
 const requestData = {
    sections: [
      {
        // Home About
        title: 'Home-about-section',
        Contents: [
          {
            title: 'homeAbout',
            type: 'header_paragraph',
            data: {
              header: this.homeForm.get('homeAboutTitle')?.value,
              description: this.homeForm.get('homeServicesDescription')?.value,
              homeAboutImage:''
            }
          }
        ]
      },
      {
        // Home services
        title: 'Home-services-section',
        Contents: [
          {
            title: 'homeServices',
            type: 'header_paragraph',
            data: {
              header: this.homeForm.get('homeServicesTitle')?.value,
              description: this.homeForm.get('homeServicesDescription')?.value,
              homeServicesImage:''
            }
          }
        ]
      },
      {
        // Home cards
        title: 'Home-cards-section',
        Contents: [
          {
            title: 'HomeCardsHeader',
            type: 'header',
            data: {
              header: this.homeForm.get('homeCardsTitle')?.value,
            }
          },
          {
            title: 'homeCards',
            type: 'list',
            data: {
              Card: this.homeForm.get('homeCards')?.value,
            }
          }
        ]
      },
      {
        // Home Brief
        title: 'Home-brief-section',
        Contents: [
          {
            title: 'homeBrief',
            type: 'header',
            data: {
              header: this.homeForm.get('homeBriefTitle')?.value,
              homeBriefImage:'',
            }
          }
        ]
      },
      //Home Blogs
      {
        title: 'Home-blogs-section',
        Contents: [
          {
            title: 'homeBlogs',
            type: 'card',
            data: {
              homeBlogs: this.homeForm.get('homeBlogs')?.value
            }
          }
        ]
      },
    ]
  };

  formData.append('requestData', JSON.stringify(requestData));

  const briefImage = this.homeForm.get('homeBriefImage')?.value;
  const AboutImage = this.homeForm.get('homeAboutImage')?.value;
  const ServicesImage = this.homeForm.get('homeServicesImage')?.value;
  formData.append('homeBriefImage', briefImage);
  formData.append('homeAboutImage', AboutImage);
  formData.append('homeServicesImage', ServicesImage);

  const blogImages = this.homeForm.get('homeBlogs') as FormArray;
  blogImages.controls.forEach((control, index) => {
    const blogImage = control.get('homeBlogImage')?.value;
    if (blogImage) {
      formData.append(`homeBlogImage_${index}`, blogImage);
    }
  });


  this.HomeData.submitForm(formData).subscribe(
    response=>{
      console.log('Form submitted successfully' , response)
    },
    error => {
      console.error('There was an error!', error);
    });



  }
}
