import { AfterViewInit, Component,OnInit } from '@angular/core';
import { HomeDataService } from '../services/home-data.service';@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  AboutSectionsData:any[] = [];
  AboutIntroductionSection :any;
  constructor(private AboutData:HomeDataService){}
  ngOnInit(): void {
    
    this.AboutData.setPageParam('about');
    this.AboutData.getData().subscribe(data=>{
      this.AboutSectionsData = data;
      this.findAboutIntroduction();
      console.log(this.AboutSectionsData);
    });

  }
  findAboutIntroduction(){
    this.AboutIntroductionSection = this.AboutSectionsData.find((section)=>{return section.title == 'About-Introduction-section'});
  }


}
