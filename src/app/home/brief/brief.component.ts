import { Component ,Input,OnInit} from '@angular/core';
@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrl: './brief.component.css'
})
export class BriefComponent implements OnInit{
  @Input() HomeBriefFromParent:any;
  HomeBriefHeader:string = ''
  HomeBriefImage:any;
  ngOnInit(): void {
    this.HomeBriefHeader = this.HomeBriefFromParent.Contents[0].data.header;
    this.HomeBriefImage = this.HomeBriefFromParent.Contents[0].data.homeBriefImage.image;
  }

}
