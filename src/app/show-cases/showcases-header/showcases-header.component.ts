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

    this.header = 'Full stack Developer';
    this.video = './assets/images/Showcases_header.jpg';

  }

}
