import Typed from 'typed.js';

  export function handleScroll(): void {
    const scrollPosition = window.pageYOffset;
    const image = document.querySelector('.scrolling-image') as HTMLElement;

    if (image) {
      const moveUp = scrollPosition * 0.5;
      image.style.transform = `translate(-50%, calc(-50% - ${moveUp}px))`;
    }
  }


  export function headerTyping() :void{
    const options = {
      strings: [
        '<span style="color:#fff;">Squarespace Developer and  Coffee Enthusiast. </span>',
      ],
      typeSpeed: 85,
      backSpeed: 85,
      loop: true
    };

    const typed = new Typed('.auto-type', options);
  }


