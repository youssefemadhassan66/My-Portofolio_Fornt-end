import { Component,Input,OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-showcases-contact',
  templateUrl: './showcases-contact.component.html',
  styleUrl: './showcases-contact.component.css'
})
export class ShowcasesContactComponent implements OnInit{
  @Input() showCasesContactFromParent:any;
  constructor(private router:Router){}
  header:string='';
  description:string='';
  link:any;
  ngOnInit(): void {
    this.header = 'Get in Touch';
    this.description = "Whether your'e looking to collaborate on a project, need a website for your business, or just want to chat about the latest in tech, I'd love to hear from you! Drop me a message, and I'll get back to you as soon as possible.";
  }
  OnNavigate(){
    this.router.navigate(['/contact']);
  }


}
