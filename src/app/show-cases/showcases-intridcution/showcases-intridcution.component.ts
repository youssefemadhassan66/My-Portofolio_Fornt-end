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
    this.header = 'Working as a Developer';
    this.description = "I am always eager to take on new challenges and contribute to innovative projects that make a difference. My goal is to continue evolving as a developer and data scientist, leveraging my skills to build solutions that not only meet today’s needs but also anticipate tomorrow’s opportunities";
    this.image = ''

  }
}
