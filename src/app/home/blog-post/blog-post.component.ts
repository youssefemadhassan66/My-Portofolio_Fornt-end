import { Component,AfterViewInit } from '@angular/core';
import {initializeSwiper,defaultSwiperOptions} from '../home.animation'

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent implements AfterViewInit{
  blogs = [
    { title: 'Card 1',
       description:'looks amazing and actually works. Bottom line,that s what I do. If you want tolearn more about working with me, take a look through my website.', image: '/assets/images/pexels-thisisengineering-3861959.jpg' },
    { title: 'Card 2', description: 'Description 2', image: '/assets/images/pexels-hellokellybrito-322335.jpg' },
    { title: 'Card 3', description: 'Description 3', image: '/assets/images/pexels-canvastudio-3153204.jpg' },
    { title: 'Card 3', description: 'Description 3', image: '/assets/images/astro2.jpg' },
  ];

  ngAfterViewInit() {
    initializeSwiper('.swiper-container', defaultSwiperOptions);
  }

}
