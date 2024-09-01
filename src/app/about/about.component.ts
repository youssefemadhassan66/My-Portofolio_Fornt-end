import { AfterViewInit, Component,OnInit } from '@angular/core';
import { HomeDataService } from '../services/home-data.service';
import AOS from 'aos';
import 'aos/dist/aos.css';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  AboutSectionsData:any[] = [];
  AboutIntroductionSection :any;
  AboutProfessionalBackgroundSection:any;
  AboutProjectsSection:any;
  AboutGoalsSection:any;
  AboutHeaderSection:any;
  constructor(private AboutData:HomeDataService){}
  ngOnInit(): void {
    AOS.init();
    this.AboutData.setPageParam('about');
    this.AboutData.getData().subscribe(data=>{
      this.AboutSectionsData = data;
      this.findAboutSections();
    });

  }
  findAboutSections(){
    this.AboutIntroductionSection = this.AboutSectionsData.find((section)=>{return section.title == 'About-Introduction-section'});
    this.AboutProfessionalBackgroundSection = this.AboutSectionsData.find((section)=>{return section.title == 'About-Professional-Background-section'});
    this.AboutProjectsSection = this.AboutSectionsData.find((section)=>{return section.title == 'About-Projects-Section'});
    this.AboutGoalsSection = this.AboutSectionsData.find((section)=>{return section.title == 'About-Goals-section'});
    this.AboutHeaderSection = this.AboutSectionsData.find((section)=>{return section.title == 'About-Header-section'});
  }


}
