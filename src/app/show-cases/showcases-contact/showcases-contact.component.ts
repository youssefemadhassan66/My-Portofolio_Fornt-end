import { Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-showcases-contact',
  templateUrl: './showcases-contact.component.html',
  styleUrl: './showcases-contact.component.css'
})
export class ShowcasesContactComponent implements OnInit{
  @Input() showCasesContactFromParent:any;
  header:string='';
  description:string='';
  link:any;
  ngOnInit(): void {
    this.header = this.showCasesContactFromParent.Contents[0].data.header;
    this.description = this.showCasesContactFromParent.Contents[0].data.description;
    this.link = this.showCasesContactFromParent.Contents[0].data.link;

  }


}