import { Component,OnInit} from '@angular/core';
import { FormGroup,Validators,FormControl,FormArray } from '@angular/forms';
import { HomeDataService } from '../services/home-data.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  ContactSectionsData:any[] = [];
  ContactIntroductionSection :any;
  ContactDirectSection:any;
  ContactHeaderSection:any;
  constructor(private ContactData:HomeDataService){}
  ngOnInit(): void {

    this.ContactData.setPageParam('contact');
    this.ContactData.getData().subscribe(data=>{
      this.ContactSectionsData = data;
      this.findContactSections();
    });

  }
  findContactSections(){
    this.ContactIntroductionSection = this.ContactSectionsData.find((section)=>{return section.title == 'Contact-Introduction-section'});
    this.ContactDirectSection = this.ContactSectionsData.find((section)=>{return section.title == 'Contact-Directly-section'});
    this.ContactHeaderSection = this.ContactSectionsData.find((section)=>{return section.title == 'Contact-Header-section'});
  }

}
