import { Component,OnInit } from '@angular/core';
import { FormGroup,FormArray,FormControl } from '@angular/forms';
import { HomeDataService } from '../../services/home-data.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-showcases-dashboard',
  templateUrl: './showcases-dashboard.component.html',
  styleUrl: './showcases-dashboard.component.css'
})
export class ShowcasesDashboardComponent implements OnInit{
  ShowCasesForm!:FormGroup;
  constructor(private ShowcasesData:HomeDataService){}

  ngOnInit(){
    this.ShowCasesForm = new FormGroup({
      ShowCasesHeaderTitle : new FormControl(''),
      ShowCasesHeaderImage : new FormControl(''),
      ShowCasesIntroductionTitle : new FormControl('',),
      ShowCasesIntroductionDescription : new FormControl(''),
      ShowCasesIntroductionImage : new FormControl(null),

      ShowCasesContactTitle : new FormControl(null),
      ShowCasesContactDescription : new FormControl(null),
      ShowCasesContactLink : new FormControl(null),

      ShowCasesSections:new FormArray ([
        new FormGroup({
          sectionTitle : new FormControl(null),
          sectionDescription : new FormControl(null),
          sectionImage: new FormControl(null),
          sectionLink:new FormControl(null)
        })]),
    });
    this.ShowcasesData.setPageParam('showCases');
  }


  get getSections(){
    return this.ShowCasesForm.get('ShowCasesSections') as FormArray;
  }
  addSection(){
    const control = <FormArray>this.ShowCasesForm.get('ShowCasesSections');
    control.push(new FormGroup({
      sectionTitle  : new FormControl(null),
      sectionDescription : new FormControl(null),
      sectionImage: new FormControl(null),
      sectionLink:new FormControl(null)
      }));
  }

  onFileChange(event: any, formControlName: string, index: number = -1) {

    const file = event.target.files[0];
    if (index === -1) {
      this.ShowCasesForm.patchValue({ [formControlName]: file });
    } else {
      const control = (this.ShowCasesForm.get('ShowCasesSections') as FormArray).at(index);
      control.patchValue({ [formControlName]: file });
    }
  }
  onSFormSubmit(){
    const formData = new FormData();
    const requestData ={
    sections: [

      {
        //  header
        title: 'ShowCases-Header-section',
        Contents: [
          {
            title: 'showCasesHeader',
            type: 'header_paragraph',
            data: {
              header: this.ShowCasesForm.get('ShowCasesHeaderTitle')?.value,
              ShowCasesHeaderImage:''
            }
          }
        ]
      },

      {
        title: 'ShowCases-Introduction-section',
        Contents:[
          {
            title:'showCasesIntroduction',
            type:'custom',
            data:{
              header: this.ShowCasesForm.get('ShowCasesIntroductionTitle')?.value,
              description: this.ShowCasesForm.get('ShowCasesIntroductionDescription')?.value,
              ShowCasesIntroductionImage:''
            }

          }
        ]
      },
      {
        title:'ShowCases-Contact-section',
        Contents:[
          {
            title:'showCasesContact',
            type:'header',
            data:{
              header: this.ShowCasesForm.get('ShowCasesContactTitle')?.value,
              description: this.ShowCasesForm.get('ShowCasesContactDescription')?.value,
              link:this.ShowCasesForm.get('ShowCasesContactLink')?.value
            }
          }
        ]
      },
      {
        title: 'ShowCases-Sections-section',
        Contents:[
          {
            title:'showCasesSections',
            type:'card',
            data:{
              ShowcasesSections:this.ShowCasesForm.get('ShowCasesSections')?.value
            }
          }
        ]
      }
    ]
  }
  formData.append('requestData', JSON.stringify(requestData));

  const ShowCasesIntroductionImage = this.ShowCasesForm.get('ShowCasesIntroductionImage')?.value;
  formData.append('ShowCasesIntroductionImage', ShowCasesIntroductionImage);

  const ShowCasesHeaderImage = this.ShowCasesForm.get('ShowCasesHeaderImage')?.value;
  formData.append('ShowCasesHeaderImage', ShowCasesHeaderImage);

  const SectionsImages = this.ShowCasesForm.get('ShowCasesSections') as FormArray;
  SectionsImages.controls.forEach((control, index) => {
    const sectionImage = control.get('sectionImage')?.value;
    if (sectionImage) {
      formData.append(`sectionImage_${index}`, sectionImage);
    }
  });

  this.ShowcasesData.submitForm(formData).subscribe(
    response=>{
      console.log('Form submitted successfully' , response)
    },
    error => {
      console.error('There was an error!', error);
    });


}

}
