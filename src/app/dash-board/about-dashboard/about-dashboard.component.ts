import { Component,OnInit} from '@angular/core';
import { FormGroup,Validators,FormControl,FormArray } from '@angular/forms';
import { HomeDataService } from '../../services/home-data.service';
@Component({
  selector: 'app-about-dashboard',
  templateUrl: './about-dashboard.component.html',
  styleUrl: './about-dashboard.component.css'
})
export class AboutDashboardComponent implements OnInit{
  aboutForm!:FormGroup;
  constructor(private AboutDataService:HomeDataService){}
  ngOnInit(){
    this.aboutForm = new FormGroup({
      AboutIntroductionTitle : new FormControl('',[Validators.required,Validators.minLength(2)]),
      AboutIntroductionDescription : new FormControl('',[Validators.required,Validators.minLength(2)]),
      AboutIntroductionImage : new FormControl(null),
      AboutProfessionalBackgroundDescription: new FormControl(null),
      AboutProjectTitleHeader : new FormControl(null),
      AboutProjects:new FormArray ([
        new FormGroup({
        ProjectTitle : new FormControl(null),
        ProjectDescription : new FormControl(null),
        ProjectGithubLink : new FormControl(null),
        ProjectHyperLink :new FormControl(null),
        })]),
      AboutGoalsTitle: new FormControl(null),
      AboutGoalsDescription: new FormControl(null),
      AboutGoalsImage: new FormControl(null),
      AboutGoalsLink: new FormControl(null),
    });
    this.AboutDataService.setPageParam('about');
  }
  getProjects(): FormArray {
    return this.aboutForm.get('AboutProjects') as FormArray;
  }

  addProject(){
    const control = <FormArray>this.aboutForm.get('AboutProjects');
    control.push(new FormGroup({
        ProjectTitle : new FormControl(null),
        ProjectDescription : new FormControl(null),
        ProjectGithubLink : new FormControl(null),
        ProjectHyperLink :new FormControl(null),
      }));
  }

  onFileChange(event: any, formControlName: string) {
    const file = event.target.files[0];
    this.aboutForm.patchValue({ [formControlName]: file });
  }

  onSFormSubmit() {
    const AboutFormData = new FormData();

    const requestData = {
      sections: [
        {
          // About Introduction
          title: 'About-Introduction-section',
          Contents: [
            {
              title: 'aboutIntroduction',
              type: 'header_paragraph',
              data: {
                header: this.aboutForm.get('AboutIntroductionTitle')?.value,
                description: this.aboutForm.get('AboutIntroductionDescription')?.value,
                homeAboutImage: ''
              }
            }
          ]
        },
        {
          // About ProfessionalBackground
          title: 'About-Professional-Background-section',
          Contents: [
            {
              title: 'aboutProfessionalBackground',
              type: 'paragraph',
              data: {
                description: this.aboutForm.get('AboutProfessionalBackgroundDescription')?.value,
              }
            }
          ]
        },
        {
          // About Projects
          title: 'About-Projects-Section',
          Contents: [
            {
              title: 'AboutProjectTitleHeader',
              type: 'header',
              data: {
                header: this.aboutForm.get('AboutProjectTitleHeader')?.value,
              }
            },
            {
              title: 'AboutProjectCards',
              type: 'card',
              data: {
                cards: this.aboutForm.get('AboutProjects')?.value,
              }
            }
          ]
        },
        {
          // About Goals
          title: 'About-Goals-section',
          Contents: [
            {
              title: 'aboutGoals',
              type: 'paragraph',
              data: {
                title: this.aboutForm.get('AboutGoalsTitle')?.value,
                description: this.aboutForm.get('AboutGoalsDescription')?.value,
                AboutGoalsImage: '',
                link: this.aboutForm.get('AboutGoalsLink')?.value,
              }
            }
          ]
        }
      ]
    };

    // Convert `requestData` to JSON and append to FormData
    AboutFormData.append('requestData', JSON.stringify(requestData));

    // Append files to FormData, if they exist
    const AboutIntroductionImage = this.aboutForm.get('AboutIntroductionImage')?.value;
    if (AboutIntroductionImage) {
      AboutFormData.append('AboutIntroductionImage', AboutIntroductionImage);
    }

    const AboutGoalsImage = this.aboutForm.get('AboutGoalsImage')?.value;
    if (AboutGoalsImage) {
      AboutFormData.append('AboutGoalsImage', AboutGoalsImage);
    }

    this.AboutDataService.submitForm(AboutFormData).subscribe(
      response => {
        console.log('Form submitted successfully', response);
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
}
