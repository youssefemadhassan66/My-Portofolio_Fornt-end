import { Component,Input ,OnInit} from '@angular/core';

@Component({
  selector: 'app-aboutprofessional-background',
  templateUrl: './aboutprofessional-background.component.html',
  styleUrl: './aboutprofessional-background.component.css'
})
export class AboutprofessionalBackgroundComponent  implements OnInit{
  @Input() AboutProfessionalBackgroundFromParent :any;

  description : string = '';

 ngOnInit(): void {

   this.description = this.AboutProfessionalBackgroundFromParent.Contents[0].data.description;

   if(!this.description){
    this.description = 'have completed several professional diplomas, including a Full Stack diploma and a Mean Stack diploma, focusing on designing and developing websites with different themes'
   }
 }

}
