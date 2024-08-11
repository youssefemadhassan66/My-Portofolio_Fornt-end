import Typed from 'typed.js';
    /// For image scrolling
  export function handleScroll(): void {
    const scrollPosition = window.pageYOffset;
    const image = document.querySelector('.scrolling-image') as HTMLElement;

    if (image) {
      const moveUp = scrollPosition * 0.5;
      image.style.transform = `translate(-50%, calc(-50% - ${moveUp}px))`;
    }
  }
  /// Typing
  export function headerTyping(){
    const options = {
      strings: [

      ],
      typeSpeed: 120,
      backSpeed: 120,
      loop: true
    };


    const typed = new Typed('.auto-type', options);
  }


  // src/app/utils/swiper-utils.ts


  //swiper
export const defaultSwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Remove or comment out the navigation options
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
};

