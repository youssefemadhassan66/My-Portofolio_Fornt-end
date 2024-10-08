import { Component,OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeDataService } from '../../services/home-data.service';
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
      homeHeaderTitle:new FormControl(''),
      homeHeaderImage : new FormControl(null),
      homeAboutTitle : new FormControl('',),
      homeAboutDescription : new FormControl(''),
      homeAboutImage : new FormControl(null),
      homeServicesTitle : new FormControl(null),
      homeServicesDescription : new FormControl(null),
      homeServicesImage : new FormControl(null),
      homeCardsTitle : new FormControl(null),
      homeCards:new FormArray ([
        new FormGroup({
          cardTitle : new FormControl(null),
          cardDescription : new FormControl(null),
          cardLink: new FormControl(null)
        })]),
      homeBriefTitle:new FormControl(null),
      homeBriefImage:new FormControl(null),
      homeBlogs:new FormArray ([
        new FormGroup({
          homeBlogTitle : new FormControl(null),
          homeBlogDescription : new FormControl(null),
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
      cardTitle : new FormControl(null),
      cardDescription : new FormControl(null),
      cardLink: new FormControl(null)
      }));
  }

  get getBlogs(){
    return this.homeForm.get('homeBlogs') as FormArray;
  }
  addBlog(){
    const control = <FormArray>this.homeForm.get('homeBlogs');
    control.push(new FormGroup({
      homeBlogTitle  : new FormControl(null),
      homeBlogDescription : new FormControl(null),
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
        // Home header
        title: 'Home-Header-section',
        Contents: [
          {
            title: 'homeHeader',
            type: 'header_paragraph',
            data: {
              header: this.homeForm.get('homeHeaderTitle')?.value,
              homeHeaderImage:''
            }
          }
        ]
      },
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

  const homeHeaderImage = this.homeForm.get('homeHeaderImage')?.value;
  formData.append('homeHeaderImage', homeHeaderImage);

  const briefImage = this.homeForm.get('homeBriefImage')?.value;
  formData.append('homeBriefImage', briefImage);

  const AboutImage = this.homeForm.get('homeAboutImage')?.value;
  formData.append('homeAboutImage', AboutImage);

  const ServicesImage = this.homeForm.get('homeServicesImage')?.value;
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
