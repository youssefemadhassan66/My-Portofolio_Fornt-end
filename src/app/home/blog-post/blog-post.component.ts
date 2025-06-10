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

  homeBlogs:any[]= [
      {
        "homeBlogTitle": "Front-end developer ",
        "homeBlogDescription": "Clinet-Side Developer : I specialize in transforming design concepts into functional, user-friendly interfaces using a combination of HTML, CSS, and JavaScript. My expertise lies in ensuring that the user experience is seamless across all devices and browsers, with a focus on responsiveness, accessibility, and performance , I utilize frameworks like Angular to build dynamic, single-page applications  that deliver a smooth and engaging user experience.",
        "homeBlogImage":"/assets/images/pexels-thisisengineering-3861959.jpg"

      },
      {
        "homeBlogTitle": "Back-end developer ",
        "homeBlogDescription": " Server side handling the logic, database interactions, authentication, and server configuration that make a website function smoothly. As a back-end developer, I specialize in creating robust and scalable server-side applications that ensure the seamless flow of data between the front-end interface and the server, My expertise includes working with technologies like Node.js, Express.js, and MongoDB to build powerful APIs and manage databases. I focus on writing clean, efficient code",
        "homeBlogImage":"/assets/images/pexels-hellokellybrito-322335.jpg"

      },
      {
        "homeBlogTitle": "knowledge in Data-Science",
        "homeBlogDescription": "strong foundation in tools like SQL, Python, Tableau, and R, I’m skilled in preparing data for analysis, building predictive models, and visualizing complex datasets in ways that are easy to understand. My work involves not just analyzing past data but also predicting future trends, enabling organizations to make data-driven decisions with confidence.",
        "homeBlogImage":"/assets/images/pexels-canvastudio-3153204.jpg"

      }
    ]
   @Input() HomeBlogsFromParent:any;
  Blogs :any[] = [];

  ngOnInit(): void {
    this.Blogs = this.HomeBlogsFromParent.Contents[0].data.homeBlogs
  }



  ngAfterViewInit() {
    initializeSwiper('.swiper-container', defaultSwiperOptions);
  }

}
