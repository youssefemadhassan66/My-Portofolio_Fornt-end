import { Component,AfterViewInit,OnInit,Input } from '@angular/core';
import {initializeSwiper,defaultSwiperOptions} from '../home.animation';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent implements AfterViewInit,OnInit{

   @Input() HomeBlogsFromParent:any;
  Blogs :any[] = [];
  BlogImges :any[] = [];
  ngOnInit(): void {
    this.Blogs = this.HomeBlogsFromParent.Contents[0].data.homeBlogs
  }



  ngAfterViewInit() {
    initializeSwiper('.swiper-container', defaultSwiperOptions);
  }

}
