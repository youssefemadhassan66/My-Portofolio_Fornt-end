import { Component, OnInit } from '@angular/core';
import { headerTyping } from '../Header.animation';
@Component({
  selector: 'app-background-photo',
  templateUrl: './background-photo.component.html',
  styleUrl: './background-photo.component.css'
})
export class BackgroundPhotoComponent  implements OnInit{

  ngOnInit(): void {
    headerTyping();
  }

}
