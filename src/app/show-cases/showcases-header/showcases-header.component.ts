import { Component ,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-showcases-header',
  templateUrl: './showcases-header.component.html',
  styleUrl: './showcases-header.component.css'
})
export class ShowcasesHeaderComponent implements OnInit{
  @Input() ShowcasesHeaderFromParent :any;
  video:any;
  header:string='';
  ngOnInit(): void {

    this.header = this.ShowcasesHeaderFromParent.Contents[0].data.header;
    this.video = this.ShowcasesHeaderFromParent.Contents[0].data.ShowCasesHeaderImage.image;

  }

}
