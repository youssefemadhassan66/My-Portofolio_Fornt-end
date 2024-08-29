import { Component ,Input,OnInit} from '@angular/core';
import { HomeDataService } from '../services/home-data.service';
@Component({
  selector: 'app-show-cases',
  templateUrl: './show-cases.component.html',
  styleUrl: './show-cases.component.css'
})
export class ShowCasesComponent implements OnInit{

  ShowcasesSectionsData :any[] = [];
  ShowCasesIntroductionSection :any;
  ShowCasesContactSection : any;
  ShowCasesSectionsOFsection:any;
  ShowCasesHeaderSection:any;
  constructor(private ShowCasesData:HomeDataService){}

  ngOnInit(): void {
    this.ShowCasesData.setPageParam('showCases');
    this.ShowCasesData.getData().subscribe(data=>{
      this.ShowcasesSectionsData = data;
      this.findHomeSections();
      console.log(this.ShowcasesSectionsData);
    });

    this.ShowCasesData.setPageParam('home');
  }

  findHomeSections() {
    this.ShowCasesIntroductionSection =  this.ShowcasesSectionsData.find(Section => Section.title === 'ShowCases-Introduction-section');
    this.ShowCasesContactSection =  this.ShowcasesSectionsData.find(item => item.title === 'ShowCases-Contact-section');
    this.ShowCasesSectionsOFsection =  this.ShowcasesSectionsData.find(item => item.title === 'ShowCases-Sections-section');
    this.ShowCasesHeaderSection =  this.ShowcasesSectionsData.find(item => item.title === 'ShowCases-Header-section');

  }

}
