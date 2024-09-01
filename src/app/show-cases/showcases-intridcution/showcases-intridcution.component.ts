import { Component ,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-showcases-intridcution',
  templateUrl: './showcases-intridcution.component.html',
  styleUrl: './showcases-intridcution.component.css'
})
export class ShowcasesIntridcutionComponent implements OnInit{
  @Input() showCasesIntroductionFromParent:any;
  header:string='';
  description:string='';
  image:any;
  ngOnInit(): void {
    this.header = this.showCasesIntroductionFromParent.Contents[0].data.header;
    this.description = this.showCasesIntroductionFromParent.Contents[0].data.description;
    this.image = this.showCasesIntroductionFromParent.Contents[0].data.ShowCasesIntroductionImage.image

  }
}
