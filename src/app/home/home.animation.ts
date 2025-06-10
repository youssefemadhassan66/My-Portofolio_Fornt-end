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

let typedInstance: Typed | null = null;

export function headerTyping(wordsArray: string[]) {
  const element = document.querySelector('.auto-type');

  if (typedInstance) {
    typedInstance.destroy();
    typedInstance = null;
  }

  if (element) {
    const options = {
      strings: wordsArray,
      typeSpeed: 0,
      backSpeed: 120,
      loop: true,
      smartBackspace: true,
      showCursor: true
    };

    typedInstance = new Typed(element, options);
    element.classList.add('typing-active');
  } else {
    console.warn("Typed element '.auto-type' not found");
  }
}

  import Swiper from 'swiper';

  export function initializeSwiper(selector: string, options: any) {
    return new Swiper(selector, options);
  }

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
