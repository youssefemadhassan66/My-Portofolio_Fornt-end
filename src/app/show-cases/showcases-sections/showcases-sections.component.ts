import { Component ,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-showcases-sections',
  templateUrl: './showcases-sections.component.html',
  styleUrl: './showcases-sections.component.css'
})
export class ShowcasesSectionsComponent implements OnInit{
  @Input() showCasesSectionsFromParent:any;
  Sections:any[]= [];
  ngOnInit(): void {
    this.Sections = this.showCasesSectionsFromParent.Contents[0].data.ShowcasesSections;
  }

}
